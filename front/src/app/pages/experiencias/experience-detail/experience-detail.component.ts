import { Experiencia } from 'src/app/models/experiencia.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocalLeisureService } from 'src/app/services/local-leisure.service';

@Component({
  selector: 'app-experience-detail',
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.css']
})
export class ExperienceDetailComponent implements OnInit {
  id!: string;
  experiencia!: Experiencia

  constructor(
    private servicio: LocalLeisureService,
    private rutaActivada: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.rutaActivada.params.subscribe((params) => {
      this.id = params['id'];

      // this.servicio.getExperienciasById(this.id).subscribe((data: any) => {
      //   console.log(data);
        
      //   this.experiencia = data;
      // });

      if (this.id) {
        this.servicio.getExperienciasById(this.id).subscribe((data: any) => { // Cambiado a `any`
          console.log(data);
          this.experiencia = data as Experiencia; // Conversión explícita a `Experiencia`
        }, error => {
          console.error('Error al obtener la experiencia', error);
        });
      }
    });
  }
}