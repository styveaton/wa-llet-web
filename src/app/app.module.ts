import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import { AuthInterceptor } from './@interceptors/auth-interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule, HashLocationStrategy } from '@angular/common';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { 
         LocationStrategy,
        PathLocationStrategy,
        APP_BASE_HREF } from '@angular/common';
import { HeaderComponent } from './pages/skeleton/header/header.component';
import { FooterComponent } from './pages/skeleton/footer/footer.component';
import { BannerComponent } from './pages/skeleton/banner/banner.component'; 
        

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader), 
        deps: [HttpClient]
      }
    }),
    CommonModule
  ],
  providers: [
     {
       provide: LocationStrategy,
       useClass: HashLocationStrategy
    },
     {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
     {provide: APP_BASE_HREF, useValue: '/'}
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
