import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileAppRoutingModule } from './mobile-app-routing.module';
import { MobileAppComponent } from './mobile-app.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    MobileAppComponent
  ],
  imports: [
    CommonModule,
    MobileAppRoutingModule,
    TranslateModule
  ]
})
export class MobileAppModule { 
  
}
