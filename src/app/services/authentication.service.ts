import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  isAuth$ = new BehaviorSubject<boolean>(false);
    token: string = "";
    userId: string = "";
    pseudo: string = "";
    userinfo: any = {};
    isLoadingOnce: boolean = false;
    private userOnceSubject$ = new BehaviorSubject<boolean>(this.userinfo);
    userOnceChanged$ = this.userOnceSubject$.asObservable();

    public currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    public configObservable = new Subject<any>();

    emitChangeonUser(val: any) {
        this.configObservable.next(val);
    }
    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }
    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') as any));
        this.currentUser = this.currentUserSubject.asObservable();
        if (this.currentUserValue) {
            this.token = this.currentUserValue.token;
            this.userId = this.currentUserValue.phone;
            this.isAuth$.next(true);

        }
    }

    updateBefore() {
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') as any));
      this.currentUser = this.currentUserSubject.asObservable();
      if (this.currentUserValue) {
          this.token = this.currentUserValue.token;
          this.userId = this.currentUserValue.phone;
          this.isAuth$.next(true);

      }
  }
  updateOnCache(user: User) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
  }
  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      var userEmpty = {};
      this.currentUserSubject.next(userEmpty as any);

      this.isAuth$.next(false);
      this.userId = "";
      this.token = "";
  }

}
