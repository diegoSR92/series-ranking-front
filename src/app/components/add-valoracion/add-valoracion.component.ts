// new-valoracion.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-new-valoracion',
  templateUrl: './add-valoracion.component.html',
  styleUrls: ['./add-valoracion.component.scss']
})

export class AddValoracionComponent implements OnInit {
  seriesList: any[] = [];
  newValoracion = { serieId: null, usuario: '', valoracion: 0 };

  constructor(private seriesService: SeriesService, private router: Router) {}

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

  addValoracion(): void {
    if (this.newValoracion.serieId) {
      this.seriesService.addValoracion(this.newValoracion.serieId, this.newValoracion).subscribe(
        () => {
          this.router.navigate(['/series-list']);
        },
        (error) => {
          console.error('Error al agregar la valoración:', error);
        }
      );
    }
  }
}
