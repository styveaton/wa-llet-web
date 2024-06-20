import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAcceptanceComponent } from './customer-acceptance.component';

const routes: Routes = [{ path: '', component: CustomerAcceptanceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerAcceptanceRoutingModule { }