
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class DiversionService {

	constructor(
		private http: HttpClient
	) {
	}

	public getHourlyDataForDate( year:number, month:number, day:number ): Promise<any> {
		var self = this;
		let promise = new Promise((resolve, reject) => {
			let url =  environment.apiUrl + `/rest/diversion/hourlyDataForDay`;
			//let url = `https://api.dev.abcwuademo.org/rest/diversion/hourlyDataForDay`;
			let options = {
				headers: new HttpHeaders({'Content-Type':'application/json'})
			};
			let payload = {
				reportDate: {
					'year': year,
					'month': month,
					'day': day
				}
			};
			self.http.post(url, payload, options)
				.subscribe({
					next: (resp: any) => {
						if (resp.status !== "ok") {
							console.error("ERROR getHourlyDataForDate", resp);
							reject(resp.message);
							return;
						}
						resolve(resp);
					},
					error: (err) => {
						console.error("ERROR getHourlyDataForDate", err);
						reject(err);
					}
				});
		});
		return promise;
	}
}

