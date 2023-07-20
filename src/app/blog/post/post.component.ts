import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  pelicula: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.pelicula = history.state.data;
    console.log('Pelicula:', this.pelicula);
  }

}