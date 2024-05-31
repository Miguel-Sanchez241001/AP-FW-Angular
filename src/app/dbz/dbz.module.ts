import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainDbzComponent } from './pages/main-page.component';
import { ListadoComponent } from './components/listado/listado.component';
import { FormularioComponent } from './components/formulario/formulario.component';



@NgModule({
  declarations: [MainDbzComponent,
    ListadoComponent,FormularioComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[MainDbzComponent]
})
export class DbzModule { }
