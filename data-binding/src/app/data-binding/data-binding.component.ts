import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://google.com';
  urlImagem: string = 'http://lorempixel.com/400/200/nature/';
  desativado: boolean = true;
  valorAtual: any;
  valorSalvo: any;
  isMouseOver: boolean = false;

  buttonClick(){
    alert("Works!");
  }

  onKeyUp(event: KeyboardEvent){
    this.valorAtual = ((<HTMLInputElement>event.target).value);
  }

  saveValue(value:any){
    this.valorSalvo = value;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
