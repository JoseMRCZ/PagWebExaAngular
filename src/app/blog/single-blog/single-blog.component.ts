import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.css']
})
export class SingleBlogComponent implements OnInit {

 peliculasPopulares: any[] = [];

  // Reemplaza "TU_CLAVE_API" con tu clave API de The Movie Database
  private apiKey = '02155ae02b1bddee02dd628d13d7e072';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.obtenerPeliculasPopulares();
  }

  obtenerPeliculasPopulares() {
    const urlBase = 'https://api.themoviedb.org/3/movie/popular';
    const parametros = {
      api_key: this.apiKey,
      language: 'es',
      page: '1'
    };

    // Realizar las solicitudes GET utilizando HttpClient
    // Cada pag tiene 20 peliculas así que para obtener la lista de 1000 peliculas realizamos 50 peticiones (50 páginas) 
    //si queremos aumentar o disminuir el numero de peliculas a mostrar solo tenemos que calcular el numero de paginas 
    //que ocupamos y cambiarlo en el for en nuestro caso vamos a obtener toda la informacion que nos de la API    
    for (let i = 1; i <= 5; i++) { 
      parametros.page = i.toString();
      this.http.get<any>(urlBase, { params: parametros }).subscribe(data => {
        this.peliculasPopulares.push(...data.results);
      });
    }
  }

}