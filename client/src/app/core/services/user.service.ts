import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { ApiService, JwtService } from '.';

@Injectable({ providedIn: 'root' })
export class UserService {
  private currentUserSubject = new BehaviorSubject<any>({} as any);
  public currentUser = this.currentUserSubject
    .asObservable()
    .pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(
    private apiService: ApiService,
    private jwtService: JwtService,
    private http: HttpClient
  ) {}

  public get authenticated() {
    return this.isAuthenticatedSubject.value;
  }

  populate() {
    // If JWT detected, attempt to get & store user's info
    if (this.jwtService.get()) {
      this.apiService.get('/users/context').subscribe(
        (data) => {
          // console.log(data);
          return this.setAuth(data.data);
        },
        (err) => {
          this.purgeAuth();
          console.error('Error populating user', err);
        }
      );
    } else {
      console.log('JWT Error');
      // Remove any potential remnants of previous auth states
      this.purgeAuth();
    }
  }

  setAuth(user: any) {
    // Save JWT sent from server in localStorage
    this.jwtService.save(user.token);
    // Set current user data into observable
    this.currentUserSubject.next(user);
    // console.log(this.currentUserSubject);
    // Set isAuthenticated to true
    this.isAuthenticatedSubject.next(true);
  }

  purgeAuth() {
    // Remove JWT from localStorage
    this.jwtService.destroy();
    // Set current user to an empty object
    this.currentUserSubject.next({} as any);
    // Set auth status to false
    this.isAuthenticatedSubject.next(false);
  }

  attemptAuth(type: string, credentials: Object): Observable<any> {
    // console.log("credentials");
    // console.log(type,credentials);

    const route = type === 'login' ? '/login' : '/signUp';
    // const route = '/login';
    let data;
    // let data=credentials;
    type === 'login'
      ? (data = { user: credentials })
      : (data = { user: credentials });
    // console.log(data);
    return this.apiService.post('/users' + route, data).pipe(
      map((data) => {
        if (type === 'login') {
          this.setAuth(data.data);
        }
        return data;
      })
    );
  }

  blockUser(email: string) {
    return this.apiService.put(`/users/block/${email}`);
  }

  unBlockUser(email: string) {
    return this.apiService.put(`/users/unBlock/${email}`);
  }

  postUsers(data: any) {
    // console.log(data);

    return this.apiService.post('/users/add', { user: data });
  }

  getStudentCount() {
    return this.apiService.get('/users/count');
  }

  getActiveStudentCount() {
    return this.apiService.get('/users/activeCount');
  }

  getDeActiveStudentCount() {
    return this.apiService.get('/users/deActiveCount');
  }

  getCurrentUser(): any {
    return this.currentUserSubject.value;
  }

  getUser(email: string): Observable<any> {
    return this.apiService.get('/users/view/' + email);
  }

  // Update the user on the server (email, pass, etc)
  update(user: any, email: any): Observable<any> {
    return this.apiService.put(`/users/edit/${email}`, user);
  }

  getAllUsers(): Observable<any> {
    return this.apiService.get('/users/all');
  }

  changeStatus(email: string): Observable<any> {
    return this.apiService.put('/users/verify/' + email);
  }

  OTPVerify(email: string, otp: number, flag: number): Observable<any> {
    return this.apiService.post(`/users/otp/verify/${email}/${flag}`, { otp });
  }

  ResetPassword(
    email: string,
    password: string,
    resetPasswordToken: string
  ): Observable<any> {
    return this.apiService.post(`/users/reset/password/${email}`, {
      password,
      resetPasswordToken,
    });
  }

  ResendOTP(email: string): Observable<any> {
    return this.apiService.post(`/users/otp/resend/${email}`, {});
  }

  deleteUser(email: string): Observable<any> {
    return this.apiService.delete('/users/delUser/' + email);
  }
}
