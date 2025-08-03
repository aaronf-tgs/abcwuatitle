import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";

@Component({
  standalone: false,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    public auth: AuthService
  ) { }


  ngOnInit(): void {
  }


  logout() {
		var self = this;
		self.auth.signOut()
			.then(() => {
				window.location.href = "https://www.abcwua.org/account-research/";
			})
			.catch((error: any) => {
				console.error("signout error", error)
			});
  }

}
