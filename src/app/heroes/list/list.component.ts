import { Component } from '@angular/core';

@Component({
  selector: 'app-herores-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heores:string [] = ['IronMan','Linterna Verde','Flash','Batman'];
  public borrado?:string ;
removeLastHeor():void{
 this.borrado = this.heores.pop();
}

}
