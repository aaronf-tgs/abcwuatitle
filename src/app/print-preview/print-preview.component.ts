import { Component } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { get } from 'es-toolkit/compat';
import { ActivatedRoute } from '@angular/router';

import { AwsDbService } from '../services/awsdb.service';


@Component({
  standalone: false,
  selector: 'app-print-preview',
  templateUrl: './print-preview.component.html',
  styleUrls: ['./print-preview.component.scss'],
  providers: [
    AwsDbService
  ]
})
export class PrintPreviewComponent {

  context :any = {
    PREMISE_ADDR1: '',
    PREMISE_CITY: '',
    PREMISE_STATE: '',
    PREMISE_ZIPCODE: '',
    BILLING_DATE: '',
    DUE_DATE: '',
    BILL_NUMBER: '',
    PREV_BALANCE: 0,
    PAYMENT_RECEIVED: 0,
    BALANCE_FORWARD: 0,
    TOTAL_ADJUSTMENT: 0,
    CURRENT_CHARGES: 0,
    TOTAL_DUE: 0,
    ACCOUNT_ROLE: '',
    BILLING_PREFERENCE: '',
    LATEST_PAYMENT: 0,
    LATEST_PAYMENT_DATE: '',
    LATEST_CURRENT_CHARGES: 0,
    LATEST_PAYOFF: 0,
    ACCT_ID: null,
    BILL_CYC_CD: null,
    CUSTOMER_CLASS: null,
    ADDRESS: null,
    EBILL_FLAG: ' ',
    AUTOPAY_FLAG: null,
    INTERUPT_SVC_FLAG: null,
    PENDING_REFUND_FLAG: null,
    BUDGET_FLAG: null,
    LAST_PAY_AMT: null,
    LAST_PAY_DT: null,
    CASH_ONLY_FLAG: null,
    ARREARS_0_TO_30: null,
    ARREARS_31_TO_60: null,
    ARREARS_61_TO_90: null,
    ARREARS_91_PLUS: null,
    LAST_BILL_URL: null,
    LAST_BILL_DT: null,
    LIEN_FLAG: null,
    UEC_WT_PAYOFF: null,
    UEC_WW_PAYOFF: null,
    BCHG_AMT: null,
    SMOKE_TEST_FLAG: null,
    CUR_AMT: null,
    TOT_AMT: null
  };
  searchAccountId = "";
  todayDate : Date = new Date();
  public arsTotal = 0;

  
  constructor(
    private route: ActivatedRoute,
    private awsDbService: AwsDbService,
    private spinner: NgxSpinnerService
  ) {
  }


  ngOnInit(): void {
    var self = this;
    this.route.queryParams.subscribe(params => {
      self.searchAccountId = params['act'];
      self.searchByAccountId();
    });
  }


  searchByAccountId() {
    var self = this;
    self.startSpinner("findAccount");
    self.awsDbService.searchTitleAccount(self.searchAccountId)
      .then(resp => {
        self.stopSpinner("findAccount");
        let actList = get(resp, "accountList", []);
        if (actList.length > 0) {
          self.context = actList[0];
          self.arsTotal =  get( self.context, "ARREARS_0_TO_30", 0) ;
          self.arsTotal +=  get( self.context, "ARREARS_31_TO_60", 0) ;
          self.arsTotal +=  get( self.context, "ARREARS_61_TO_90", 0) ;
          self.arsTotal +=  get( self.context, "ARREARS_91_PLUS", 0) ;
        }
      })
      .catch(err => {
        self.stopSpinner("findAccount");
      });
  }


  printPage() {
    window.print();
  }

  //////////////////////////////////////////////////////////////////////////////////////

  startSpinner(spinnerName: string) {
    var self = this;
    this.spinner.show();
  }


  stopSpinner(spinnerName: string) {
    var self = this;
    this.spinner.hide();
  }

}
