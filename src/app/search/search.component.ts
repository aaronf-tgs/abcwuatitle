import { Component, ChangeDetectorRef, NgZone } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { get, set } from 'es-toolkit/compat';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { signOut, fetchUserAttributes, signIn, SignInInput } from 'aws-amplify/auth';
import { Amplify } from 'aws-amplify';
import { Hub } from 'aws-amplify/utils';

import { AwsDbService } from '../services/awsdb.service';
import { AuthService } from '../services/auth.service';
import { AccountDetailsComponent } from './account-details/account-details.component';
import config from '../../../amplify-output.json';


@Component({
  standalone: false,
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  providers: [
    AwsDbService,
    AuthService
  ]
})
export class SearchComponent {

  public searchAccountId = "";
  public searchStreetNumber = "";
  public searchStreetName = "";
  public accountList: any[] = [];
  public isSignedIn = false;
  public isGettingUser = false;
  public isValidUser = true;
  public loginStatus = "";
  public readyToSearch = false;
  public noResults = false;
  public currentUser: string = "";
  public formFields = {
    signUp: {
      email: {
        order:1
      },
      password: {
        order: 2
      },
      confirm_password: {
        order: 3
      }
    },
  }


  constructor(
    private awsDbService: AwsDbService,
    public authenticator: AuthenticatorService,
    private modalService: NgbModal,
    private ref: ChangeDetectorRef,
    private ngZone: NgZone,
    private spinner: NgxSpinnerService
  ) {
    Amplify.configure(config);
  }


  services = {
    async handleSignIn(input: SignInInput) {
      let { username, password, options } = input;
      // custom username and email
      username = username.toLowerCase();
      return signIn({
        username,
        password,
        options: {
          authFlowType: 'USER_PASSWORD_AUTH'
        }
      });
    },
  };


  ngOnInit(): void {
    var self = this;
    fetchUserAttributes()
      .then((userAttributes) => {
        console.log("User attributes fetched:", userAttributes);
        var email = get(userAttributes, 'email', );
        var firstName = get(userAttributes, 'given_name', '');
        var lastName = get(userAttributes, 'family_name', '');
        if (email) {
          self.currentUser = email;
          self.isSignedIn = true;
          self.isGettingUser = true;
          self.isValidUser = false;
          self.ref.detectChanges();
          self.getUserProfile(email, firstName, lastName);
        }
        else {
          self.isSignedIn = false;
          self.isGettingUser = false;
          self.isValidUser = false;
          self.ref.detectChanges();
        }
      })
    .catch((error) => {
      console.error("Error fetching user attributes:", error);
    });

    Hub.listen('auth', (data) => {
      try {
        const authState = get(data, 'payload.event', '');
        const email = get(data, 'payload.data.attributes.email', '');
        self.loginStatus = "Login Status: " + authState;
        if (authState !== "signedIn") {
          self.isSignedIn = false;
          self.isGettingUser = false;
          self.isValidUser = false;
          self.ref.detectChanges();
          return;
        }

        self.isSignedIn = true;
        self.isGettingUser = true;
        self.isValidUser = false;
        self.ref.detectChanges();

        self.getUserProfile(email,"","");
      }
      catch (err) {
        self.loginStatus = "Login Err:" + get(err, "message", "");
        console.error("onAuthUIStateChange error", err);
        self.ref.detectChanges();
      }
    })
  }


  search() {
    var self = this;
    self.noResults = false;
    if (self.searchAccountId) {
      self.searchByAccountId();
    }
    else if (self.searchStreetName) {
      self.searchByAddress();
    }
  }


  searchByAccountId() {
    var self = this;
    self.accountList = [];
    self.startSpinner("findAccount");
    self.awsDbService.searchTitleAccount(self.searchAccountId)
      .then(resp => {
        self.stopSpinner("findAccount");
        let actList = get(resp, "accountList", []);
        self.sortAccountList(actList);
        self.noResults = (actList.length === 0) ? true : false;
      })
      .catch(err => {
        self.stopSpinner("findAccount");
      });
  }


  searchByAddress() {
    var self = this;
    self.accountList = [];
    self.startSpinner("findAccount");
    var street = self.searchStreetNumber.trim() + " " + self.searchStreetName.trim();
    street = street.toUpperCase();
    self.awsDbService.searchTitleAddress(street)
      .then(resp => {
        self.stopSpinner("findAccount");
        let actList:any[] = get(resp, "accountList", []);
        actList.forEach(i=>{ i.getDetail = 'notYet'});
        self.sortAccountList(actList);
        self.noResults = (actList.length === 0) ? true : false;
        self.updateAccountList();
      })
      .catch(err => {
        self.stopSpinner("findAccount");
      });
  }



  sortAccountList(actList: any[]) {
    var self = this;
    self.accountList = actList.sort((a, b) => {
      let aval = a.ADDRESS;
      let bval = b.ADDRESS;
      if (self.searchAccountId) {
        aval = a.ACCT_ID;
        bval = b.ACCT_ID;
      }
      if (aval < bval) {
        return -1;
      }
      else if (aval > bval) {
        return 1;
      }
      else {
        return 0;
      }
    });
    self.ref.detectChanges();
  }


  updateAccountList() {
    var self = this;
    for (let act of self.accountList) {
      if (act.getDetail !== "notYet") {
        // skip accounts already requested
        continue;
      }
      self.awsDbService.searchTitleAccount(act.ACCT_ID)
        .then(resp => {
          let updatedAccountList = get(resp, "accountList", []);
          for (let updatedAct of updatedAccountList) {
            for (let key in updatedAct) {
              set( act, key, get( updatedAct, key, "")) ;
            }
          }
          act.getDetail = "Loaded";
          self.ref.detectChanges();
          // now do the next account
          self.updateAccountList();
        })
        .catch(err => {
          console.error("updateAccountList", err);
        });
      // request one account at a time
      act.getDetail = "Loading";
      break;
    }
  }


  getUserProfile(email:string, firstName:string, lastName:string) {
    var self = this;
    let payload = {
      'EMAIL': email.trim().toLowerCase(),
      'NAME_FIRST': firstName,
      'NAME_LAST': lastName,
      'email': email.trim().toLowerCase(),
      'phone': "",
      'firstName': firstName,
      'lastName': lastName
    };

    self.awsDbService.getUserProfile(payload)
      .then(resp => {
        self.isGettingUser = false;
        let userType = get(resp, "results.USER_TYPE", "");
        if ((userType.indexOf("TITLE") > -1) || (userType.indexOf("CSR") > -1)) {
          self.isValidUser = true;
        }
        self.ref.detectChanges();
      })
      .catch(ex => {
        self.isValidUser = false;
        self.isGettingUser = false;
        self.ref.detectChanges();
      });
  }


  logout() {
    var self = this;
    signOut()
      .then(() => {
        self.isSignedIn = false;
        self.isValidUser = false;
        self.ref.detectChanges();
      })
      .catch((error: any) => {
        console.error("signout error", error)
      });
  }


  validateInputs() {
    var self = this;
    if (/^([0-9]){5,}$/.test(self.searchAccountId)) {
      self.readyToSearch = true;
      self.ref.detectChanges();
      return (true)
    }
    if (self.searchStreetName.length > 3) {
      self.readyToSearch = true;
      self.ref.detectChanges();
      return (true)
    }
    self.readyToSearch = false;
    self.ref.detectChanges();
    return (false)
  }


  clearSearch() {
    var self = this;
    self.searchAccountId = "";
    self.searchStreetNumber = "";
    self.searchStreetName = "";
    self.ref.detectChanges();
  }


  /////////////////////////////////////////////////////////////////////////////

  showDetailsModal(act:any) {
    var self = this;
    self.ngZone.run(() => {
      const modalRef = self.modalService.open(AccountDetailsComponent, { size: 'lg' });
      modalRef.componentInstance.context = act;
      self.ref.detectChanges();
      modalRef.result.then(foundResp => {
      });
    });
  }


  //////////////////////////////////////////////////////////////////////////////////////

  startSpinner(spinnerName:string) {
    var self = this;
    this.spinner.show();
    setTimeout(function () { self.ref.detectChanges(); }, 500);
  }


  stopSpinner(spinnerName:string) {
    var self = this;
    this.spinner.hide();
    setTimeout(function () { self.ref.detectChanges(); }, 500);
  }


  //////////////////////////////////////////////////////////////////////////////////////

  goHome() {
    window.location.href = "https://www.abcwua.org/account-research/";
  }


  ngOnDestroy() {
    return null; //-> onAuthUIStateChange;
  }

}
