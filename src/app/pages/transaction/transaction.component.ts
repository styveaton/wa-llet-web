import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Base } from 'src/app/base.component';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss'],
})
export class TransactionComponent extends Base {
  constructor(router: Router, translate: TranslateService) {
    super(router, translate);
  }
  openViewDetailtransaction() {
    this.router.navigate(['/transaction-details']);
  }
}
