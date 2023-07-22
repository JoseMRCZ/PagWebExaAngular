// user-data.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './../Models/user.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private firstUserSubject = new BehaviorSubject<User | null>(null);
  public firstUser$ = this.firstUserSubject.asObservable();
  private users: User[] = [];
  private user!: User ;

  constructor(private http: HttpClient) {}
  setFirstUser(user: User): void {
    this.firstUserSubject.next(user);
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
      // Asignamos el usuario obtenido a this.user
      this.user = user;

      // Emitimos el usuario al firstUserSubject
      this.firstUserSubject.next(this.user);
    });

  }

  obtenerUsers() {
    this.http.get<any>('https://randomuser.me/api/?results=50').subscribe((response) => {
      const results = response.results;
      this.users = [];
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

      if (this.users.length > 0) {
        this.firstUserSubject.next(this.users[0]);
      }
    });
  }

  getUsers() {
    return this.users;
  }
}
