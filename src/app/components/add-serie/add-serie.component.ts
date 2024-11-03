import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-add-serie',
  templateUrl: './add-serie.component.html',
})
export class AddSerieComponent {
  serieForm: FormGroup;
    selectedFile: File | null = null;
  showPopup = false;

    constructor(private fb: FormBuilder, private serieService: SeriesService) {
        this.serieForm = this.fb.group({
            nombre: [''],
            plataforma: [''],
            sinopsis: ['']
        });
    }

    onFileSelected(event: Event): void {
        const input = event.target as HTMLInputElement;
        if (input.files?.length) {
            this.selectedFile = input.files[0];
        }
    }

    onSubmit(): void {
        if (this.serieForm.valid && this.selectedFile) {
            const formData = new FormData();
            formData.append('nombre', this.serieForm.get('nombre')?.value);
            formData.append('plataforma', this.serieForm.get('plataforma')?.value);
            formData.append('sinopsis', this.serieForm.get('sinopsis')?.value);
            formData.append('caratula', this.serieForm.get('caratula')?.value);

            this.serieService.addSerie(formData).subscribe(response => {
                console.log('Serie agregada:', response);
            });
        }
    }

  showPopupMessage(): void {
    this.showPopup = true;
    setTimeout(() => {
      this.showPopup = false;
    }, 2000); // Oculta el popup después de 2 segundos
  }
}
