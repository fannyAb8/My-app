import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class FormularioLoginPages implements OnInit {

  mostrar_texto= false;

  password="1234"
  validar= [];


  constructor() { }

  ngOnInit() {
  }

  Validar(){
    this.validar.push({
      password: this.password,
    });
    this.password="1234";

    this.mostrar_texto= true;
    console.log("Validar");
  }
}







