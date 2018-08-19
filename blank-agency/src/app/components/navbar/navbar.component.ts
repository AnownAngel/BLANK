import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { BackendService } from '../../services/backend.service';
import { Users } from '../../models/users';

@Component({
  selector: 'app-nav',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  template: `
  <nav id="element2" class="navbar navbar-default" role="navigation" style="z-index: 9">
    <div class="container-fluid">
      <div class="navbar-header">

        <button type="button" class="navbar-toggle" data-toggle="collapse" #nav data-target="#myNavbar">

          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>


        </button>

        <a class="navbar-brand active" href="/">BLΛNK AGENCY</a>

      </div>
      <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav">
          <li>
          <a routerLink="/users">Users</a>
            <select>
            <option>Browse</option>
            <option>Saab</option>
            <option>Opel</option>
            <option>Audi</option>
          </select>
          </li>


        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li>
          <a type="button" id="button" (click)="htmlInsideModal.open()">
            <span class="glyphicon glyphicon-globe"></span>Sign Up As BLΛNK Agent!
          </a>
          </li>

          <li>
          <a type="button" id="button" (click)="htmlInsideModal2.open()">
            <span class="glyphicon glyphicon-user"></span>Login
          </a>

          </li>
          <li>
          </li>
        </ul>
        </div>
      </div>
  </nav>
  <form #loginForm="ngForm" ngNativeValidate (ngSubmit)="onSubmit(loginForm)" autocomplete="on">
      <modal #htmlInsideModal>

            <div [hidden]="loginForm.submitted">
          <ng-template #modalHeader>

              <h3>Sign Up</h3>
              <p>Please fill in this form to create an account.</p>
          </ng-template>
          <ng-template #modalBody>


           <input id="age" type="text" name="age" placeholder="Enter Age"
           ngModel required oninvalid="this.setCustomValidity('Enter Age Here')">


            <input type="text" class="oneLine" id="fname" name="fname" placeholder="Enter your firstname"
            ngModel required oninvalid="this.setCustomValidity('Enter Your Firstname Here')">


            <input type="text" class="oneLine" name="lname" placeholder="Enter your lastname"
            ngModel required oninvalid="this.setCustomValidity('Enter Your Lastname Here')">

            <input type="text" name="email" placeholder="Enter Email"
            ngModel required oninvalid="this.setCustomValidity('Enter Email Here')">


            <input type="password" name="password" placeholder="Enter Password"
            ngModel required oninvalid="this.setCustomValidity('Enter Password Here')">

            <input type="password" name="psw-repeat" placeholder="Repeat Password"
            ngModel required oninvalid="this.setCustomValidity('Repeat Password Here')">



            <p>By creating an account you agree to our
              <a href="#" style="color:dodgerblue">Terms & Privacy</a>.
            </p>

            <div class="clearfix">
              <button type="button" class="cancelbtn" (click)="cancel(loginForm)">Reset</button>
              <button type="submit" class="signupbtn">Sign Up</button>
            </div>


            <div class="submitted-message" *ngIf="loginForm.submitted">
              <p>Registration succeeded! Welcome to the family, {{ loginForm.value.name }}!</p>
            </div>
            <a *ngIf="loginForm.submitted" href="/registration">Back</a>
            <a *ngIf="loginForm.submitted"> | </a>
            <a *ngIf="loginForm.submitted" href="#">Home</a>
          </ng-template>
        </div>

      </modal>
      </form>
      `,
      providers: [BackendService]
})
export class NavbarComponent implements OnInit {
 users: Users[];
  constructor(private backendService: BackendService) { }

  ngOnInit() {

  }
  onSubmit(loginForm: NgForm) {
    this.backendService.onSubmit(loginForm.value).subscribe(data => this.users.push(loginForm.value));
    if (loginForm.valid) {
      console.log('Form Submitted!');
      loginForm.reset();
    }
  }
  cancel(loginForm: NgForm) {
    loginForm.reset();
  }
}
