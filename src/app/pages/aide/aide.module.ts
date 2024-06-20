import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AideRoutingModule } from './aide-routing.module';
import { AideComponent } from './aide.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    AideComponent
  ],
  imports: [
    CommonModule,
    AideRoutingModule,
    TranslateModule
  ]
})
export class AideModule { }
