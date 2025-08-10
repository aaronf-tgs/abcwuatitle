import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class AwsDbService {
  constructor(private http: HttpClient) {}

  public getUserProfile(payload: any) {
    var self = this;
    let promise = new Promise((resolve, reject) => {
      let url = environment.apiUrl + `rest/awsdb/titleUserProfile`;
      let options = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      };
      payload.app = "title";
      self.http.post(url, payload, options).subscribe(
        {
          next: (resp: any) => {
            resolve(resp);
          },
          error: (err) => {
            console.error('getUserProfile error', err);
            reject(err);
          }
        }
      );
    });
    return promise;
  }

  public searchTitleAccount(accountId: String) {
    var self = this;
    let promise = new Promise((resolve, reject) => {
      let url =
        environment.apiUrl +
        `rest/awsdb/searchTitleAccount?accountId=${accountId}&street=`;
      self.http.get(url).subscribe(
        (resp: any) => {
          resolve(resp);
        },
        (err) => {
          console.error('searchTitleAccount error', err);
          reject(err);
        }
      );
    });
    return promise;
  }

  public searchTitleAddress(street: String) {
    var self = this;
    let promise = new Promise((resolve, reject) => {
      let url =
        environment.apiUrl +
        `rest/awsdb/searchTitleAddressOnly?street=${street}`;
      self.http.get(url).subscribe(
        (resp: any) => {
          resolve(resp);
        },
        (err) => {
          console.error('searchTitleAddress error', err);
          reject(err);
        }
      );
    });
    return promise;
  }


  public sendSmokeTest(payload: any) {
    var self = this;
    let promise = new Promise((resolve, reject) => {
      let url = environment.apiUrl + `rest/awsdb/smokeTestEmail`;
      let options = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      };
      self.http.put(url, payload, options).subscribe(
        (resp: any) => {
          resolve(resp);
        },
        (err) => {
          console.error('sendSmokeTest error', err);
          reject(err);
        }
      );
    });
    return promise;
  }
}
