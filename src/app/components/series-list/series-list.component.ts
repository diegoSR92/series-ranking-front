// series-list.component.ts
import { Component, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';


@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.scss']
})
export class SeriesListComponent implements OnInit {
  seriesList: any[] = [];

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.obtenerSeries();
  }

  obtenerSeries(): void {
    this.seriesService.getSeriesList().subscribe(
      (data) => {
        this.seriesList = data;
      },
      (error) => {
        console.error('Error al obtener las series:', error);
      }
    );
  }
}
