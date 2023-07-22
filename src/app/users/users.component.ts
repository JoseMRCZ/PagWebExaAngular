import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './../Models/user.model';
import { MatTableDataSource } from '@angular/material/table';
import { forkJoin } from 'rxjs';
import { UserDataService } from './user-data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  paginatedUsers: User[] = [];

  currentPage: number = 1;
  itemsPerPage: number = 20;
  totalItems: number = 50;
  totalPages: number = 0;
  dataSource!: MatTableDataSource<User>;

  constructor(private http: HttpClient,private userDataService: UserDataService) { }

  ngOnInit() {
    this.obtenerusers();
    console.log("ngonint"+this.users);

  }
  obtenerPrimerUser( ){
    this.http.get<any>("https://randomuser.me/api/").subscribe((response) => {
      const result = response.results[0];
      const user: User = {
        titulo: result.name.title,
        nombre: result.name.first,
        apellido: result.name.last,
        user: result.login.username,
        correo: result.email,
        images: result.picture.medium,
        tel: result.phone,
        edad: result.dob.age,
      };
    });
  }

  
  obtenerusers() {
    const requests = [];
    requests.push(this.http.get<any>("https://randomuser.me/api/?results=50"));  
    forkJoin(requests).subscribe((responses) => {
      // Since you are expecting only one response, you can directly access it as responses[0]
      const results = responses[0].results;
      for (const result of results) {
        const user: User = {
          titulo: result.name.title,
          nombre: result.name.first,
          apellido: result.name.last,
          user: result.login.username,
          correo: result.email,
          images: result.picture.medium,
          tel: result.phone,
          edad: result.dob.age,
        };
        this.users.push(user);
      }  
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
      this.paginateUsers();       
      console.log("dentro de obtener", this.users); // This will correctly log the entire users array
    });
  }
  



  onPageChange(event: any) {
    this.currentPage = event.pageIndex + 1;
    this.paginateUsers();
  }
  private paginateUsers() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedUsers = this.users.slice(startIndex, endIndex);
    
  }

}
