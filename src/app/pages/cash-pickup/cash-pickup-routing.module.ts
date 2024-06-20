import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashPickupComponent } from './cash-pickup.component';

const routes: Routes = [{ path: '', component: CashPickupComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashPickupRoutingModule { }