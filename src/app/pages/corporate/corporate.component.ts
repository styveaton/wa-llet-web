import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Base } from 'src/app/base.component';
import * as translatCorporate from '../../langues/corporate';
@Component({
  selector: 'app-corporate',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.scss']
})
export class CorporateComponent extends Base {

  translations:any = {};
  constructor(router: Router, translate: TranslateService){
    super(router, translate);
    this.translations = translatCorporate;
  }
  applyText(text:string){
    return  this.translations[this.activeLangue]?.PROPS[text];
   }
  openViewAbout(){
    this.router.navigate(['/about']);
  }
}
