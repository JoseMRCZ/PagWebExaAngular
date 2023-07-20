import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLoading: boolean = false;
  showLogin: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.showLogin= false;
    console.log('Login clicked');
    this.isLoading = true;
    setTimeout(() => {
      this.router.navigate(['/components/lista-peliculas']);
    }, 1000);
  }
}