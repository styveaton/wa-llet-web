import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',pathMatch: 'full',redirectTo: 'home',},
  { path: 'home',loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
  { path: 'how-it-works',loadChildren: () => import('./pages/comment-ca-marche/comment-ca-marche.module').then(m => m.CommentCaMarcheModule) },
  { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },
  { path: 'privacy-policy', loadChildren: () => import('./pages/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyModule) },
  { path: 'cookies-policy', loadChildren: () => import('./pages/cookies-policy/cookies-policy.module').then(m => m.CookiesPolicyModule) },
  { path: 'customer-acceptance', loadChildren: () => import('./pages/customer-acceptance/customer-acceptance.module').then(m => m.CustomerAcceptanceModule) },
  { path: 'general-conditions', loadChildren: () => import('./pages/general-conditions/general-conditions.module').then(m => m.GeneralConditionsModule) },
  { path: 'mobile-app', loadChildren: () => import('./pages/mobile-app/mobile-app.module').then(m => m.MobileAppModule) }
   //{ path: 'faq', loadChildren: () => import('./pages/aide/aide.module').then(m => m.AideModule) },
 // { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  //{ path: 'avis', loadChildren: () => import('./pages/reviews/reviews.module').then(m => m.ReviewsModule) },
 // { path: 'corporate', loadChildren: () => import('./pages/corporate/corporate.module').then(m => m.CorporateModule) },
  //{ path: 'transaction', loadChildren: () => import('./pages/transaction/transaction.module').then(m => m.TransactionModule) },
  //{ path: 'sponsor-a-friend', loadChildren: () => import('./pages/sponsor/sponsor.module').then(m => m.SponsorModule) },
 // { path: 'send-money', loadChildren: () => import('./pages/send-money/send-money.module').then(m => m.SendMoneyModule) },
 // { path: 'my-informations', loadChildren: () => import('./pages/my-information/my-information.module').then(m => m.MyInformationModule) },
 // { path: 'transaction-details', loadChildren: () => import('./pages/transaction-details/transaction-details.module').then(m => m.TransactionDetailsModule) },
 // { path: 'cash-pickup', loadChildren: () => import('./pages/cash-pickup/cash-pickup.module').then(m => m.CashPickupModule) },
 // { path: 'gerer-mon-compte', loadChildren: () => import('./pages/my-account/my-account.module').then(m => m.MyAccountModule) },
  //{ path: 'partners-and-affiliates', loadChildren: () => import('./pages/partners-and-affiliates/partners-and-affiliates.module').then(m => m.PartnersAndAffiliatesModule) },
  //{ path: 'full-calculator', loadChildren: () => import('./pages/full-calculator/full-calculator.module').then(m => m.FullCalculatorModule) },
 // { path: 'registration', loadChildren: () => import('./pages/registration/registration.module').then(m => m.RegistrationModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//ng g m header --module app --route header