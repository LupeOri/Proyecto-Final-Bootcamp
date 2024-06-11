import { Experiencia } from 'src/app/models/experiencia.model';
import { LocalLeisureService } from './../../services/local-leisure.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {

  experienciaList: Experiencia[] = [];
  ciudadFiltro: string = '';
  temaFiltro: string = '';
  precioMinFiltro: number = 0;
  precioMaxFiltro: number = Infinity;

  constructor(private localLeisureService: LocalLeisureService){

  }

  ngOnInit(){
    this.localLeisureService.getExperiencias().subscribe((response: any)=>{
    this.experienciaList = response
   this.experienciaList.push()
    },
    error => {
      console.error('Error al obtener las experiencias:', error);
    }
  );
      }

  aplicarFiltros() {
    
    if (this.ciudadFiltro) {
      this.experienciaList = this.experienciaList.filter(experiencia =>
        experiencia.ubicacion.includes(this.ciudadFiltro)
      );
    }


    if (this.temaFiltro) {
      this.experienciaList = this.experienciaList.filter(experiencia =>
        experiencia.categoria.toLowerCase() === this.temaFiltro.toLowerCase()
      );
    }

  
if (!isNaN(this.precioMinFiltro)) {
  this.experienciaList = this.experienciaList.filter(experiencia =>
    parseFloat(experiencia.precio) >= this.precioMinFiltro
  );
}


if (!isNaN(this.precioMaxFiltro)) {
  this.experienciaList = this.experienciaList.filter(experiencia =>
    parseFloat(experiencia.precio) <= this.precioMaxFiltro
  );
}
  }
}
