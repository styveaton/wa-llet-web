import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Base } from 'src/app/base.component';
import * as translateAbout from '../../langues/about';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent extends Base {
 
  translations:any = {};
  constructor(public override translate: TranslateService,router: Router){
    super(router , translate);
    this.translations = translateAbout;
  }

  applyText(text:string){
   return  this.translations[this.activeLangue]?.PROPS[text];
  }

}
