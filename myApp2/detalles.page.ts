import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class FormularioLoginPages implements OnInit {

  mostrar_texto= false;

  passwordbad=""
  passwordOK="1234"
  validar= [];


  constructor() { }

  ngOnInit() {
  }

  Validar(){
    this.validar.push({
      passwordbad: this.passwordbad,
    });
    this.passwordbad="";

    this.mostrar_texto= false;
    console.log("Validar");

    this.validar.push({
      passwordOK: this.passwordOK,
    });
    this.passwordOK="1234";

    this.mostar_texto= true;
    console.log("Validar");
  }
}







