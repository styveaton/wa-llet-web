import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Base } from 'src/app/base.component';

@Component({
  selector: 'app-transaction-box',
  templateUrl: './transaction-box.component.html',
  styleUrls: ['./transaction-box.component.scss']
})
export class TransactionBoxComponent extends Base{

  constructor(router: Router, translate: TranslateService){
    super(router, translate);
  }
  openViewmobile(){
    this.router.navigate(['/mobile-app']);
  }
}
