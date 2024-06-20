import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullCalculatorComponent } from './full-calculator.component';

const routes: Routes = [{ path: '', component: FullCalculatorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FullCalculatorRoutingModule { }
