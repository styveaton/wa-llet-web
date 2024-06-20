import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Base } from 'src/app/base.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent extends Base{
  constructor(router: Router, translate: TranslateService){
    super(router, translate);
  }
  openViewLogin(){
    this.router.navigate(['/login']);
  }
}
