import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyInformationComponent } from './my-information.component';

const routes: Routes = [{ path: '', component: MyInformationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyInformationRoutingModule { }