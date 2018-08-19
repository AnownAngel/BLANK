import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { NgForm } from '@angular/forms';
import { Users } from '../models/users';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class BackendService {
  private dummyUrl = 'http://localhost:3000';
  user: Users[];
  items = [];
  constructor(private http: HttpClient) {}

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

  getUsers() {
    return this.http.get(this.dummyUrl + '/hallo');
  }





  /** POST: add a new user to the database **/

  addUser(user: Users) {
    return this.http.post('https://blank-agency.org/lol', user /* , this.options */ );
  }


  /** Post: NgForm  */

  onSubmit(user: NgForm) {
    return this.http.post('https://blank-agency.org/test', user /* , this.options */ );
  }
  onSubmitLogin(user2: NgForm) {
    return this.http.post('http://localhost:3000/logintest', user2 /* , this.options */ );
  }

  getFilteredUsers(e) {
    return this.http.get(this.dummyUrl + '/hallo').map((items: any) => {
        return items.filter((items2) => (items2.Firstname.includes(e.target.value) ||
        items2.Lastname.includes(e.target.value) ||
        items2.Firstname.includes(e.target.value.toUpperCase()) ||
        items2.Firstname.includes(e.target.value.toLowerCase()) ||
        items2.Lastname.includes(e.target.value))  ? items2.Firstname : '');
      }, error => error);
  }
}
