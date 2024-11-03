
import { Component, OnInit } from '@angular/core';
import { Serie, SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-series-ranking',
  templateUrl: './series-ranking.component.html',
  styleUrls: ['./series-ranking.component.scss']
})
export class SeriesRankingComponent implements OnInit {
  topSeries: Serie[] = [];

  constructor(private serieService: SeriesService) {}

  ngOnInit(): void {
    this.loadRankedSeries();
  }

  loadRankedSeries(): void {
    this.serieService.getSeriesList().subscribe((series) => {
      this.topSeries = series.map((serie: { 
          id: number; 
          nombre: string; 
          plataforma: string; 
          sinopsis: string; 
          valoracionMedia: number; 
            caratula: string; 
      }) => {
        return serie;
      });
    });
  }

  convertBlobToImageUrl(blob: Blob): string | null {
    if (blob && blob instanceof Blob) {
      const url = URL.createObjectURL(blob);
      setTimeout(() => URL.revokeObjectURL(url), 100);
      return url;
    }
    return null;
  }

}

