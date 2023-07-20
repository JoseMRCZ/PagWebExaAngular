import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminblogComponent } from './adminblog/adminblog.component';
import { LoginComponent } from './auth/login/login.component';
import { BlogPageComponent } from './blog/blog-page/blog-page.component';
import { PostComponent } from './blog/post/post.component';
import { ListaPeliculasComponent } from './components/lista-peliculas/lista-peliculas.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'blog', component: BlogPageComponent },
  { path: 'blog/my-best-blog/:id', component: PostComponent }, // Agregamos el parámetro opcional "id"
  { path: 'admin/blog', component: AdminblogComponent },
  { path: 'components/lista-peliculas', component: ListaPeliculasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
