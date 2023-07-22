import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPeliculasComponent } from './components/lista-peliculas/lista-peliculas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';


import { BlogPageComponent } from './blog/blog-page/blog-page.component';
import { SingleBlogComponent } from './blog/single-blog/single-blog.component';
import { MaterialDesignModule } from './components/material-desing/material-design.module';
import { PostComponent } from './blog/post/post.component';
import { AdminblogComponent } from './adminblog/adminblog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { UsersComponent } from './users/users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListPComponent } from './components/list-p/list-p.component';
import { RegistrodialogoComponent } from './components/registrodialogo/registrodialogo.component'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BlogPageComponent,
    SingleBlogComponent,
    PostComponent,
    AdminblogComponent,
    DeleteDialogComponent,
    UsersComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    ReactiveFormsModule,
    ListaPeliculasComponent,
    RegistrodialogoComponent,
    ListPComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
