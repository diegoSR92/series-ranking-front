import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesListComponent } from './components/series-list/series-list.component';
import { AddSerieComponent } from './components/add-serie/add-serie.component';
import { AddValoracionComponent } from './components/add-valoracion/add-valoracion.component';
import { SeriesRankingComponent } from './components/series-ranking/series-ranking.component';

const routes: Routes = [
  { path: 'series-list', component: SeriesListComponent },
  { path: 'series-ranking', component: SeriesRankingComponent },
  { path: 'new-serie', component: AddSerieComponent },
  { path: 'new-valoracion', component: AddValoracionComponent },
  { path: '', redirectTo: '/series-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
