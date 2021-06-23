import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  constructor() { }

  nombreLower: string = "miguel ángel";
  fecha: Date = new Date();

  ngOnInit(): void {
  }

}
