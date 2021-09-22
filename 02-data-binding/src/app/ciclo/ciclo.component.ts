import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit {

  @Input() valorInicial: number = 10;

  constructor() { this.log('constructor');}

  ngOnChanges(){ this.log('ngOnChanges');}

  ngOnInit(): void { this.log('ngOnInit');}

  ngDoCheck(){ this.log('ngDoCheck');}

  ngOnDestroy(){ this.log('ngOnDestroy');}

  private log(hook : string){
    console.log(hook);
  }

}
