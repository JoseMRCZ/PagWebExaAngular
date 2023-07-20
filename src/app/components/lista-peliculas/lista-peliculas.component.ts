import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { Router } from '@angular/router';
import { Pelicula } from './../../Models/pelicula.model';
import { MatPaginatorModule } from '@angular/material/paginator';



@Component({
  selector: 'app-lista-peliculas',
  templateUrl: './lista-peliculas.component.html',
  styleUrls: ['./lista-peliculas.component.css'],
  standalone: true,
  imports: [MatCardModule, 
            MatButtonModule,  
            CommonModule, 
            MatGridListModule,             
            MatPaginatorModule,
  
          ],
})
export class ListaPeliculasComponent implements OnInit {

  peliculas: Pelicula[] = [];

  
    // Pagination variables
    currentPage: number = 1;
    itemsPerPage: number = 50;
    totalItems: number = 0;
    i : number = 1;
    totalPages: number = 0;
    selectedPage:number = 0;

  


  // Reemplaza "TU_CLAVE_API" con tu clave API de The Movie Database
  private apiKey = '02155ae02b1bddee02dd628d13d7e072';

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.obtenerPeliculasPopulares();
  }

  move(pelicula: any) {
    console.log('mover a best=blog');
    console.log('id pelicula', pelicula.id);
    console.log('titulo pelicula', pelicula.title);

    setTimeout(() => {
      //this.router.navigate(['blog/my-best-blog']);
      this.router.navigate(['blog/my-best-blog', pelicula.id], { state: { data: pelicula } });
    }, 1000);
  }

  navegarADetalles(pelicula: any) {
    console.log('navegar detalle', pelicula);
    console.log('id pelicula', pelicula.id);
    this.router.navigate(['blog/my-best-blog', pelicula.id], { state: { data: pelicula } });
  }
  mover(pelicula: any) {
    console.log('Película a navegar:', pelicula);
    this.navegarADetalles(pelicula);
    this.move(pelicula);
  }

  obtenerPeliculasPopulares() {
    const urlBase = 'https://api.themoviedb.org/3/movie/popular';
    const parametros = {
      api_key: this.apiKey,
      language: 'es',
      page: this.currentPage.toString(),
    };
    const imageBaseUrl = 'https://image.tmdb.org/t/p/w500'; // Specify the image size you want to use

    // Realizar las solicitudes GET utilizando HttpClient
    // Cada pag tiene 20 peliculas así que para obtener la lista de 1000 peliculas realizamos 50 peticiones (50 páginas) 
    //si queremos aumentar o disminuir el numero de peliculas a mostrar solo tenemos que calcular el numero de paginas 
    //que ocupamos y cambiarlo en el for en nuestro caso vamos a obtener toda la informacion que nos de la API    

    this.http.get<any>(urlBase, { params: parametros }).subscribe((data) => {
      this.peliculas = data.results.map((peliculaDataFull: any) => ({
        id: peliculaDataFull.id,
        titulo: peliculaDataFull.title,
        descricion: peliculaDataFull.overview,
        estreno: peliculaDataFull.release_date,
        pop: peliculaDataFull.vote_average,
        images: imageBaseUrl + peliculaDataFull.poster_path,
      }));
      this.totalItems = data.total_results;
    });
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);

  }
  onPageChange(event: any) {
    this.currentPage = event.pageIndex + 1;
    this.obtenerPeliculasPopulares();
  }
  getPagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
  goToPage(page: number) {
    this.currentPage = page;
    this.obtenerPeliculasPopulares();
  }
  getCurrentPageMovies() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.peliculas.slice(startIndex, endIndex);
  }
  goToSelectedPage() {
    if (this.selectedPage >= 1 && this.selectedPage <= this.totalPages) {
      this.currentPage = this.selectedPage;
      this.obtenerPeliculasPopulares();
    } else {
      console.log('Invalid page number');
    }
  }

}
