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

  constructor(private localLeisureService: LocalLeisureService){

  }

  ngOnInit(){
    this.localLeisureService.getExperiencias().subscribe((response: any)=>{
    this.experienciaList = response
   this.experienciaList.push()
    })
      }

}
