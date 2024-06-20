import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralConditionsComponent } from './general-conditions.component';

const routes: Routes = [{ path: '', component: GeneralConditionsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralConditionsRoutingModule { }