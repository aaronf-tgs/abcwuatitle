import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { get } from 'es-toolkit/compat';

import { AwsDbService } from '../../services/awsdb.service';
@Component({
  selector: 'app-account-details',
  standalone: false,
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss'],
  providers: [
    AwsDbService
  ]
})
export class AccountDetailsComponent {
	@Input() context: any;
  public budgetBilling = "Inactive";
  public eBill = "Inactive";
  public lienActive = "Inatcive";
  public arsTotal = 0;


  constructor(
    public modal: NgbActiveModal,
		private ref: ChangeDetectorRef,
    private awsDbService: AwsDbService
    ) {
  }


  ngOnInit(): void {
    var self = this;
    self.arsTotal =  get( self.context, "ARREARS_0_TO_30", 0) ;
    self.arsTotal +=  get( self.context, "ARREARS_31_TO_60", 0) ;
    self.arsTotal +=  get( self.context, "ARREARS_61_TO_90", 0) ;
    self.arsTotal +=  get( self.context, "ARREARS_91_PLUS", 0) ;
    self.ref.detectChanges();
    self.checkForSmokeTestAlert();
  }


  checkForSmokeTestAlert() {
    var self = this;
    if (self.context.SMOKE_TEST_FLAG === "Y") {
      console.log("Sending Smoke Test Alert email");
      self.awsDbService.sendSmokeTest(self.context);
    }
  }


	closeDialog() {
		this.modal.close(null);
	}

}
