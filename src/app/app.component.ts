import { Component, inject } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { get } from 'es-toolkit/compat';

import { MatTableDataSource } from '@angular/material/table';
import { DiversionService } from './diversion.service';
import { DateFunctions } from './DateFunctions';
import { format } from 'highcharts';


@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    DiversionService
  ]
})
export class AppComponent {
  title = 'ABCWUA Diversion';
	public mode = "Meter";
	public startDate: string = '2020-11-23';
	public endDate: string = DateFunctions.formatDate(new Date());
	rawResults: any[] = [];
	public meterData: any[] = [];
	public volumeData: any[] = [];
	public flowData: any[] = [];

  diversionService = inject(DiversionService);
  spinner = inject(NgxSpinnerService);


	ngOnInit(): void {
		var self = this;
		self.updateData();
	}


	changeMode(newMode: string) {
		var self = this;
		self.mode = newMode;
	}


	setEndDate(dt: string) {
		var self = this;
		self.endDate = dt;
		self.updateData() ;
	}


	updateData() {
		var self = this;
		var dt = new Date(self.endDate) ;
		let year:number = DateFunctions.getYear(dt);
    let month:number = DateFunctions.getMonth(dt);
		let day:number = DateFunctions.getDay(dt);

    self.rawResults = [];
	  self.meterData = [];
	  self.volumeData = [];
	  self.flowData = [];

		self.startSpinner("getHourlyDataForDate");
		self.diversionService.getHourlyDataForDate(year, month, day)
			.then(resp => {
				self.stopSpinner("getHourlyDataForDate");
				if (!resp) {
					return;
				}

        self.rawResults = get(resp, "results.results", []);
        var hResults = [];
        var vResults = [];
        var fResults = [];
        var vSummary = {
          VOLUME_DIVERTED: 0,
          DAILY_VOLUME_SJWT_PS: 0,
          DAILY_VOLUME_ALAMEDA_PS: 0,
        };
        let startHour = new Date(self.endDate + "T00:00:00Z");
        var endHour =  new Date(self.endDate + "T00:00:00Z");
        endHour.setMinutes(endHour.getMinutes() + (24* 60));
        for (let r of self.rawResults) {
          try {
            let dtStr = get(r, "datetime_minus1hour", "") ;
            let dt = new Date(dtStr);

            //let dt = DateFunctions.new(dtStr);
            //->dt = dt.utc();
            console.log("dtStr",dt.toUTCString(),startHour.toUTCString(),endHour.toUTCString(), );
            if ((dt < startHour) || (dt >= endHour)) {
              continue;
            }

            let h = {
              ts: dt.valueOf(),
              dt: dtStr,
              date: DateFunctions.formatDate(dt),
              dateTime: DateFunctions.formatTime(dt),
              DFEFQIT_E02_MG: get(r, "analog.DFEFQIT_E02_MG.curval", 0),
              DFWFQIT_W02_MG: get(r, "analog.DFWFQIT_W02_MG.curval", 0),
              SWRPNTOT_MG: get(r, "analog.SWRPNTOT_MG.curval", 0),
              SWRPSTOT_MG: get(r, "analog.SWRPSTOT_MG.curval", 0),
              ALAPSTOT_MG: get(r, "analog.ALAPSTOT_MG.curval", 0)*1000,
              ALAPSTOT_AF: get(r, "analog.ALAPSTOT_AF.curval", 0)
            };
            hResults.push(h);

            let v = {
              ts: dt.valueOf(),
              dt: dtStr,
              date: DateFunctions.formatDate(dt),
              dateTime: DateFunctions.formatTime(dt),
              VOLUME_DIVERTED: get(r, "VOLUME_DIVERTED", 0),
              VOLUME_DIVERTED_ACFT: (get(r, "VOLUME_DIVERTED", 0) / 325.851).toFixed(2),
              DIVERSION_TOTAL: get(r, "DIVERSION_TOTAL", 0),
              DIVERSION_TOTAL_ACFT: (get(r, "DIVERSION_TOTAL", 0) / 325.851).toFixed(2),
              DAILY_VOLUME_SJWT_PS: get(r, "VOLUME_DIVERTED_CFS" , 0) * 651.702,
              DAILY_VOLUME_SJWT_PS_ACFT: get(r, "VOLUME_DIVERTED_CFS", 0).toFixed(2),
              TOTAL_VOLUME_SJWT_PS: get(r, "DIVERSION_TOTAL_minus1hour", 0),
              TOTAL_VOLUME_SJWT_PS_ACFT: (get(r, "DIVERSION_TOTAL_minus1hour", 0) / 325.851).toFixed(2),
              DAILY_VOLUME_ALAMEDA_PS: get(r, "DAILY_VOLUME_ALAMEDA_PS", 0) * 1000,
              DAILY_VOLUME_ALAMEDA_PS_ACFT: ((get(r, "DAILY_VOLUME_ALAMEDA_PS", 0) * 1000) / 325.851).toFixed(2),
              TOTAL_VOLUME_ALAMEDA_PS: get(r, "analog.ALAPSTOT_AF.curval", 0) * 325.851,
              TOTAL_VOLUME_ALAMEDA_PS_ACFT: get(r, "analog.ALAPSTOT_AF.curval", 0).toFixed(2)
            };
            vResults.push(v);
            vSummary.VOLUME_DIVERTED += v.VOLUME_DIVERTED ;
            vSummary.DAILY_VOLUME_SJWT_PS += v.DAILY_VOLUME_SJWT_PS ;
            vSummary.DAILY_VOLUME_ALAMEDA_PS += v.DAILY_VOLUME_ALAMEDA_PS ;

            let f = {
              ts: dt.valueOf(),
              dt: dtStr,
              date: DateFunctions.formatDate(dt),
              dateTime: DateFunctions.formatTime(dt),
              dateTimeFull: DateFunctions.formatDateTime(dt),
              VOLUME_DIVERTED_CFS_REVISED: get(r, "VOLUME_DIVERTED_CFS_REVISED", 0),
              VOLUME_RETURNED_CFS_REVISED: get(r, "VOLUME_RETURNED_CFS_REVISED", 0),
              VOLUME_DIVERTED:  get(r, "VOLUME_DIVERTED", 0),
              VOLUME_RETURNED: get(r, "VOLUME_RETURNED", 0),
              VOLUME_DIVERTED_AF: get(r, "VOLUME_DIVERTED_AF", 0),
              VOLUME_RETURNED_AF: get(r, "VOLUME_RETURNED_AF", 0)
            };
            fResults.push(f);
          }
          catch(err) {
            console.log(err);
          }
        }
        self.setMeterData(hResults);
        self.setVolumeData(vResults, vSummary);
        self.setFlowData(fResults);
			})
			.catch(ex => {
				self.stopSpinner("getHourlyDataForDate");
			});
		}


    setMeterData(hResults: any) {
      var self = this;
      self.meterData = hResults.sort((a: { ts: number; },b: { ts: number; }) => {
        if (a.ts < b.ts) {
          return -1;
        }
        else if (a.ts > b.ts) {
          return 1;
        }
        else {
          return 0;
        }
      });
    }


    setVolumeData(vResults: { ts: number; dt: string; date: string; dateTime: string; VOLUME_DIVERTED: number; VOLUME_DIVERTED_ACFT: string; DIVERSION_TOTAL: number; DIVERSION_TOTAL_ACFT: string; DAILY_VOLUME_SJWT_PS: number; DAILY_VOLUME_SJWT_PS_ACFT: string; TOTAL_VOLUME_SJWT_PS: number; TOTAL_VOLUME_SJWT_PS_ACFT: string; DAILY_VOLUME_ALAMEDA_PS: number; DAILY_VOLUME_ALAMEDA_PS_ACFT: string; TOTAL_VOLUME_ALAMEDA_PS: number; TOTAL_VOLUME_ALAMEDA_PS_ACFT: string; }[], vSummary: { VOLUME_DIVERTED: any; DAILY_VOLUME_SJWT_PS: any; DAILY_VOLUME_ALAMEDA_PS: any; }) {
      var self = this;
      self.volumeData = vResults.sort((a: { ts: number; },b: { ts: number; }) => {
        if (a.ts < b.ts) {
          return -1;
        }
        else if (a.ts > b.ts) {
          return 1;
        }
        else {
          return 0;
        }
      });
      let summary = {
        dateTime: "summary",
        VOLUME_DIVERTED: vSummary.VOLUME_DIVERTED,
        VOLUME_DIVERTED_ACFT: (vSummary.VOLUME_DIVERTED / 325.851).toFixed(2),
        DIVERSION_TOTAL: null,
        DIVERSION_TOTAL_ACFT: null,
        DAILY_VOLUME_SJWT_PS: vSummary.DAILY_VOLUME_SJWT_PS,
        DAILY_VOLUME_SJWT_PS_ACFT:(vSummary.DAILY_VOLUME_SJWT_PS / 325.851).toFixed(2),
        TOTAL_VOLUME_SJWT_PS: null,
        TOTAL_VOLUME_SJWT_PS_ACFT: null,
        DAILY_VOLUME_ALAMEDA_PS: vSummary.DAILY_VOLUME_ALAMEDA_PS,
        DAILY_VOLUME_ALAMEDA_PS_ACFT: (vSummary.DAILY_VOLUME_ALAMEDA_PS / 325.851).toFixed(2),
        TOTAL_VOLUME_ALAMEDA_PS: null,
        TOTAL_VOLUME_ALAMEDA_PS_ACFT: null
      };
      self.volumeData.push(summary);
    }


    setFlowData(fResults: { ts: number; dt: string; date: string; dateTime: string; dateTimeFull: string; VOLUME_DIVERTED_CFS_REVISED: number; VOLUME_RETURNED_CFS_REVISED: number; VOLUME_DIVERTED: number; VOLUME_RETURNED: number; VOLUME_DIVERTED_AF: number; VOLUME_RETURNED_AF: number; }[]) {
      var self = this;
      self.flowData = fResults.sort((a: { ts: number; },b: { ts: number; }) => {
        if (a.ts < b.ts) {
          return -1;
        }
        else if (a.ts > b.ts) {
          return 1;
        }
        else {
          return 0;
        }
      });
    }

	//////////////////////////////////////////////////////////////////////////////////////

	startSpinner(spinnerName: string) {
		this.spinner.show();
	}


	stopSpinner(spinnerName: string) {
		this.spinner.hide();
  }
}
