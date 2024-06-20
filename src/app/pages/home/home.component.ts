import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Base } from 'src/app/base.component';
import { HeaderComponent } from '../skeleton/header/header.component'; 
import { TransactionBoxComponent } from '../skeleton/transaction-box/transaction-box.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends Base{


  constructor(router: Router,  translate: TranslateService){
    super(router,translate)
  }

  openViewCommentCaMarche(){
    this.router.navigate(['/how-it-works']);
  }

  openViewAide(){
    this.router.navigate(['/faq']);
  }

  openViewLogin(){
    this.router.navigate(['/login']);
  }

  openViewRegistration(){
    this.router.navigate(['/registration']);
  }
  openViewCalculator(){
    this.router.navigate(['/full-calculator']);
  }
  openViewmobile(){
    this.router.navigate(['/mobile-app']);
  }
}
