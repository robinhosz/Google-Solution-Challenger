import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './components/contato/contato.component';
import { DetalhesComponent } from './components/detalhes/detalhes.component';
import { HomeComponent } from './components/home/home.component';
import { PlantasComponent } from './components/plantas/plantas.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "contato", component: ContatoComponent
  },
  {
    path: "plantas", component: PlantasComponent
  },
  { path: 'detalhes/:planta', component: DetalhesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
