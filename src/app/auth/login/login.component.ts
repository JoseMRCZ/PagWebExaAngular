import { Component,EventEmitter, OnInit,Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RegistrodialogoComponent } from './../../components/registrodialogo/registrodialogo.component';
import { UserDataService } from './../../users/user-data.service';
import { User } from './../../Models/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  @Output() loggedInUsername = new EventEmitter<string>();
  
  loginForm!: FormGroup;
  isLoading: boolean = false;
  showLogin: boolean = true;

  constructor(private router: Router, private fb: FormBuilder,private dialog: MatDialog,private userDataService: UserDataService) {

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  abrirDialogoRegistro() {
    this.dialog.open(RegistrodialogoComponent);
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    
  }

  login() {
    this.showLogin = false;
    console.log('Login clicked');
    this.isLoading = true;
    //this.userDataService.obtenerUsers();
    this.userDataService.obtenerPrimerUser();
    setTimeout(() => {
      const username = 'nombre_de_usuario'; // Reemplaza esto con el nombre de usuario real
      this.loggedInUsername.emit(username); // Emitimos el nombre de usuario
  
      this.router.navigate(['/components/lista-peliculas']);
    }, 1000);
  }
}
