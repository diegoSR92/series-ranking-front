import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeriesListComponent } from './components/series-list/series-list.component';
import { AddSerieComponent } from './components/add-serie/add-serie.component';
import { AddValoracionComponent } from './components/add-valoracion/add-valoracion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SeriesRankingComponent } from './components/series-ranking/series-ranking.component';

@NgModule({
  declarations: [
    AppComponent,
    SeriesListComponent,
    AddSerieComponent,
    AddValoracionComponent,
    SeriesRankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
