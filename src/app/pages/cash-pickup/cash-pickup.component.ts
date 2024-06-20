import { Component } from '@angular/core';
import { Base } from 'src/app/base.component';
import * as translateCashPickUp from '../../langues/cash-pickup';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cash-pickup',
  templateUrl: './cash-pickup.component.html',
  styleUrls: ['./cash-pickup.component.scss']
})
export class CashPickupComponent extends Base{
  translations:any = {};
  constructor(router: Router,  translate: TranslateService){
    super(router,translate);
    this.translations = translateCashPickUp;
  }

  

  applyText(text:string){
    return  this.translations[this.activeLangue]?.PROPS[text];
   }
}
