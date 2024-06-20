import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Base } from 'src/app/base.component';

@Component({
  selector: 'app-send-money',
  templateUrl: './send-money.component.html',
  styleUrls: ['./send-money.component.scss']
})
export class SendMoneyComponent extends Base{
  constructor(router: Router, translate: TranslateService){
    super(router, translate);
  }
  openViewFaq(){
    this.router.navigate(['/faq']);
  }
}
