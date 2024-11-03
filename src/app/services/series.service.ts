import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface Serie {
  id: number;
  nombre: string;
  plataforma: string;
  sinopsis: string;
  valoracionMedia: number;
  caratula: string; 
}

export interface Valoracion {
  autor: string;
  valoracion: number;
}

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private apiUrl = 'http://localhost:8080/api/series';

  constructor(private http: HttpClient) { }

  getSeriesList(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  getTopSeries(): Observable<Serie[]> {
    return this.http.get<Serie[]>(`${this.apiUrl}/ranking`).pipe(
      map(series => series.map(serie => {
        return serie;
      }))
    );
  }

  // Método para convertir Base64 a Blob
  private base64ToBlob(base64Data: string, contentType: string = 'image/png'): Blob {
    const byteCharacters = atob(base64Data);
    const byteNumbers = Array.from(byteCharacters).map(char => char.charCodeAt(0));
    const byteArray = new Uint8Array(byteNumbers);
    return new Blob([byteArray], { type: contentType });
  }


  addSerie(serie: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, serie);
  }

  addValoracion(serieId: number, valoracion: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${serieId}/valoraciones`, valoracion);
  }
  
}

