import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent implements OnInit {

  nombre: string = 'Luisa';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino':'invitarla'
  }

  clientes: string[] = ['Maria','Juan', 'Luis','Martín','Pedro'];
  clientesMapa = {
    '=0':'no tenemos ningún cliente esperando',
    '=1':'tenemos 1 cliente esperando',
    'other':'tenemos # clientes esperando'
  }

  cambiarPersona() {
    this.nombre = 'Miguel Ángel';
    this.genero='masculino';
  }

  borrarCliente() {
    this.clientes.shift();
  }

  //KeyValue
  persona = {
      nombre:'Miguel Ángel',
      edad: 44,
      direccion: 'Getafe, Madrid'
  }

  heroes = [ 
    {
      nombre: 'Superman',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    }
]

  //Async pipe
  miObservable = interval(5000).pipe( tap( () => console.log ('prueba')));
  valorPromesa = new Promise( (resolve,reject) => 
  {
    setTimeout( () => {
      resolve('Tenemos data de promesa');

    }, 3500);
  });

  constructor() { }

  ngOnInit(): void {
    //ordenar
    this.heroes.sort(
      (a,b) => {
        return (a.nombre >= b.nombre)?-1:1; 
      });
  }

}
