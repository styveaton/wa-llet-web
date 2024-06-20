import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartnersAndAffiliatesComponent } from './partners-and-affiliates.component';

const routes: Routes = [{ path: '', component: PartnersAndAffiliatesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnersAndAffiliatesRoutingModule { }