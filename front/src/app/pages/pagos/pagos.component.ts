import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia.model';
import { LocalLeisureService } from 'src/app/services/local-leisure.service';

@Component({
  selector: 'app-pagos',
  templateUrl: './pagos.component.html',
  styleUrls: ['./pagos.component.css']
})
export class PagosComponent {
  experiencia: Experiencia | null = null;
  mensaje: string = 'Está realizando la reserva de su experiencia';

  constructor(
    private route: ActivatedRoute,
    private localLeisureService: LocalLeisureService
  ) {}

  ngOnInit(): void {
    const experienciaId = this.route.snapshot.paramMap.get('id');
    if (experienciaId) {
      this.localLeisureService.getExperienciasById(experienciaId).subscribe(
        (data: any) => {
          this.experiencia = data;
        },
        (error: any) => {
          console.error('Error al obtener la experiencia:', error);
        }
      );
    }
  }
}
