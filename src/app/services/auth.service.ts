import { Injectable } from '@angular/core';
import { Hub } from '@aws-amplify/core';
import { fetchUserAttributes, signIn, signOut, signUp, fetchAuthSession } from "aws-amplify/auth"
import { Subject, Observable } from 'rxjs';
import { CognitoUser } from 'amazon-cognito-identity-js'


export interface NewUser {
	email: string,
	phone: string,
	password: string,
	firstName: string,
	lastName: string
};

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	public loggedIn: boolean = false;
	private _authState: Subject<CognitoUser | any> = new Subject<CognitoUser | any>();
	authState: Observable<CognitoUser | any> = this._authState.asObservable();

	public static SIGN_IN = 'signIn';
	public static SIGN_OUT = 'signOut';
	// public static FACEBOOK = CognitoHostedUIIdentityProvider.Facebook;
	// public static GOOGLE = CognitoHostedUIIdentityProvider.Google;

	constructor() {
		Hub.listen('auth', (data) => {
			const { channel, payload } = data;
			if (channel === 'auth') {
				this._authState.next(payload.event);
			}
		});
	}


	signUp(user: NewUser): Promise<CognitoUser | any> {
		return signUp({
			"username": user.email,
			"password": user.password,
      "options": {
        "userAttributes": {
          "email": user.email,
          "phone_number": user.phone,
          "given_name": user.firstName,
          "family_name": user.lastName
        }
      }
		});
	}


	signIn(username: string, password: string): Promise<CognitoUser | any> {
		return new Promise((resolve, reject) => {
			signIn({ "username": username, "password": password })
				.then((user: CognitoUser | any) => {
					this.loggedIn = true;
					resolve(user);
				})
				.catch((error: any) => reject(error));
		});
	}


	signOut(): Promise<any> {
		return signOut();
	}


	// socialSignIn(provider: CognitoHostedUIIdentityProvider): Promise<ICredentials> {
	// 	return Auth.federatedSignIn({
	// 		'provider': provider
	// 	});
	// }


	getUserDetails(userObj: CognitoUser) {
		return new Promise((resolve, reject) => {
				if (!userObj) {
					resolve(null);
				}
				fetchUserAttributes()
					.then((user: CognitoUser | any) => {
						resolve(user);
					})
					.catch((error: any) => reject(error));
			});
	}


  public async getSession() {
    const session = await fetchAuthSession();
    return session;
  }


}
