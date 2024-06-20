import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Base } from 'src/app/base.component';

@Component({
  selector: 'app-mobile-app',
  templateUrl: './mobile-app.component.html',
  styleUrls: ['./mobile-app.component.scss']
})
export class MobileAppComponent extends Base {
  constructor(router: Router, translate: TranslateService){
    super(router, translate);
  }
  openViewlogin(){
    this.router.navigate(['/login']);
  }
}
