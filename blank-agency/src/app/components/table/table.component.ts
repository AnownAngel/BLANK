import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../services/backend.service';
import { Users } from '../../models/users';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [BackendService]
})
export class TableComponent implements OnInit {

  constructor(private backendService: BackendService) { }
  users: Users[];
  data: any;
  arr = [];
  private id: number;
  private firstname: string;
  private lastname: string;
  private password: string;
  private email: string;
  private age: number;
  private newUser: any;
  private filteredArray = [];

  ngOnInit() {
    this.getUsers();
  }



  getUsers() {
    this.backendService.getUsers().subscribe((data: Users) => {
      this.id = data[0];
      this.age = data[0];
      this.firstname = data[0];
      this.lastname = data[0];
      this.data = data;

    });
  }


  onSearchFilter(e: any) {
    this.backendService.getFilteredUsers(e).subscribe((data: Users) => {
      this.id = data[0];
      this.age = data[0];
      this.firstname = data[0];
      this.lastname = data[0];
      this.data = data;


    });

  }
}
