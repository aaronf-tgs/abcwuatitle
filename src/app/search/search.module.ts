import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

import { HeaderComponent } from '../header/header.component';
import { SearchComponent } from './search.component';
import { FooterComponent } from '../footer/footer.component';
import { SearchRoutingModule } from './search-routing.module';
import { AccountDetailsComponent } from './account-details/account-details.component';


@NgModule({
  declarations: [
    SearchComponent,
    AccountDetailsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SearchRoutingModule,
    DatePipe,
    CurrencyPipe,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
		MatTabsModule,
		MatInputModule,
		MatFormFieldModule,
		MatTableModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    AmplifyAuthenticatorModule,
    NgbModule
  ]
})
export class SearchModule { }
