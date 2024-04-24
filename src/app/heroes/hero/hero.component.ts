import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  // public name:string = 'miguel';  interpolacion de datos <h1>{{name}}</h1>
  public name:string = 'miguel';
  public age:number = 22;

  get capitalizeName():string{
    return this.name.toUpperCase();
  }

  getHeroDescripcion():string {
    return `${this.name} - ${this.age}`
  }


  changeName():void{
    this.name = "Linterna Verde";
  }

  changeAge():void{
    this.age = 71;
  }
  resert() {
    this.name = "miguel";
    this.age = 22;
    }
}
