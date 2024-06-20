import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Base } from 'src/app/base.component';
import * as translatBanner from '../../../langues/banner';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent extends Base{
  translations:any = {}; 
  constructor(router: Router, translate: TranslateService){
    super(router, translate);
    this.translations = translatBanner;
  }

  applyText(text:string){
    return  this.translations[this.activeLangue]?.PROPS[text];
   }
   openViewmobile(){
    this.router.navigate(['/mobile-app']);
  }

}
