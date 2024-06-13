import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/models/experiencia.model';
import { LocalLeisureService } from 'src/app/services/local-leisure.service';


@Component({
  selector: 'app-experiencias-anfitrion',
  templateUrl: './experiencias-anfitrion.component.html',
  styleUrls: ['./experiencias-anfitrion.component.css']
})
export class ExperienciasAnfitrionComponent implements OnInit{

  experienciasForm!: FormGroup;
  nuevaExperiencia: Experiencia = {
    _id: '',
    titulo: '',
    descripcion: '',
    ubicacion: '',
    precio: '',
    duracion: '',
    categoria: 'otras categorias',
    usuario: { _id: '', tipo: 'anfitrion', nombre: '', email: '', password: '' }, // Usuario por defecto
    valoraciones: [],
    imagenes: '',
    nombre: ''
  };

  constructor(
    private formBuilder: FormBuilder,
    private experienciaService: LocalLeisureService,
    private router: Router
  ) {}

  ngOnInit() {
    this.experienciasForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      ubicacion: ['', Validators.required],
      precio: ['', Validators.required],
      duracion: ['', Validators.required],
      categoria: ['', Validators.required],
      // usuario: this.formBuilder.group({
      //   _id: [''],
      //   tipo: ['anfitrion'],
      //   nombre: [''],
      //   email: [''],
      //   password: ['']
      // }),
      // valoraciones: [''],
      imagenes: ['', Validators.required],
      // nombre: ['']
    });

    this.experienciasForm.valueChanges.subscribe((changes) => {
      this.nuevaExperiencia = { ...this.nuevaExperiencia, ...changes };
    });
  }

  onSubmit() {
    if (this.experienciasForm.valid) {
      const newExperiencia = this.experienciasForm.value;
      this.experienciaService.postExperiencia(newExperiencia).subscribe(
        (response: any) => {
          alert('Experiencia creada');
          this.router.navigate(['/experiencias']);
        },
        error => {
          console.error('Error al obtener las experiencias:', error);
        }
        
      );
    }
  }
}