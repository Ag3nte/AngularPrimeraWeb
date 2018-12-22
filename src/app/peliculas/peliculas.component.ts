import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  peliculas : any[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // alert("esto es una prueba");
    // this.peliculas = [
    //   new Peli('Matrix'),
    //   new Peli('El señor de los anillos'),
    //   new Peli('Jurassic Park'),
    //   new Peli('Harry Potter')];

    //hacemos la peticion para obtener las peliculas
    this.doAsyncTask().then(
      () => console.log("Task Complete!"),
      () => console.log("Task Errored!"),
    );

    //new Angular HttpClient service
    this.http.get('http://localhost:8080/StreamingSGE/Controller?ACTION=Pelicula.cargarTodasPeliculas').subscribe(data => {   // data is already a JSON object
      console.log(data);
      let aux : Array<string>;
      // <string[]>data --> estoy haciendo casting del tipo Object al tipo string[]
      this.peliculas = <string[]>data;
    });

  }
  
  

   doAsyncTask() {
    var promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Async Work Complete");
        resolve();
      }, 1000);
    });
    return promise;
  }

}

export class Peli {
  constructor(
    public titulo: string) { }
}
