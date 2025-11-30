import { NgModule } from '@angular/core';
import { enableDebugTools } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { PrintPreviewComponent } from './print-preview/print-preview.component';


const routes: Routes = [
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  },
  {
    path: 'printPreview',
    component: PrintPreviewComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
