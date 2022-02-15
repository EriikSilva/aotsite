import { TemporadasComponent } from './views/temporadas/temporadas.component';
import { PersonagensComponent } from './views/personagens/personagens.component';
import { HistoriaComponent } from './views/historia/historia.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component:HomeComponent
  },
  {
    path: "historia",
    component: HistoriaComponent
  },
  {
    path: "personagens",
    component: PersonagensComponent
  },
  {
    path: "temporadas",
    component: TemporadasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
