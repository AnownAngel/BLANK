import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { NgForm } from '@angular/forms';
import { Users } from '../navbar/users';

@Injectable()

export class BackendService {
  private dummyUrl = 'http://localhost:3000/';
  constructor(private http: Http) {}

  /*
  getAll(): Observable<any> {
    return this.http.get(this.dummyUrl + '?_sort=id&_order=desc')
      .map(response => response.json());
  }

  getUsers() {
    return this.http.get(this.dummyUrl)
      .map(res => res.json());
  }

  */

  /** GET data from Server to show **/

  getUsers(): Observable<Response> {
    return this.http.get(this.dummyUrl + '/users');
  }





  /** POST: add a new user to the database **/

  addUser(user: Users): Observable<Response> {
    return this.http.post('https://blank-agency.org/lol', user /* , this.options */ );
  }


  /** Post: NgForm  */

  onSubmit(user: NgForm): Observable<Response> {
    return this.http.post('http://localhost:3000/test', user /* , this.options */ );
  }
  onSubmitLogin(user2: NgForm): Observable<Response> {
    return this.http.post('http://localhost:3000/logintest', user2 /* , this.options */ );
  }
}
