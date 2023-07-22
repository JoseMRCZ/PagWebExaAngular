import { Component, OnInit } from '@angular/core';
import { UserDataService } from './users/user-data.service';
import { User } from './Models/user.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name = '';
  userName = '';
  imag='';
  firstUser: User | null = null;

  title = 'Examen Angulat';
  isDrawerOpened = false;
 
  toggleDrawer() {
    this.isDrawerOpened = !this.isDrawerOpened;
  }

  constructor(private userDataService: UserDataService) {
    this.userDataService.firstUser$.subscribe((user) => {
      this.firstUser = user;
      if (user) {
        this.name = user.nombre + ' ' + user.apellido;
        this.userName = user.user;
        this.imag = user.images;
       }
    });
  }

  

}
