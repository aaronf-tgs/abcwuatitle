import { NgModule } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';

import  { PrintPreviewComponent } from './print-preview.component';
import { PrintPreviewRoutingModule } from './print-preview-routing.module';


@NgModule({
  declarations: [
    PrintPreviewComponent
  ],
  imports: [
    CommonModule,
    DatePipe,
    CurrencyPipe,
    NgxSpinnerModule,
    PrintPreviewRoutingModule
  ]
})
export class PrintPreviewModule { }
