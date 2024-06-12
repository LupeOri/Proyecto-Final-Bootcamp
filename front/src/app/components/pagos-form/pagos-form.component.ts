import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PagosService } from '../../services/pagos.service';

@Component({
  selector: 'app-pagos-form',
  templateUrl: './pagos-form.component.html',
  styleUrls: ['./pagos-form.component.css']
})
export class PagosFormComponent implements OnInit {
  public pagosForm: FormGroup;

  constructor(private fb: FormBuilder, private pagosService: PagosService) {
    this.pagosForm = this.fb.group({
      nombre: ['', Validators.required],
      tarjeta: ['', Validators.required],
      fecha: ['', Validators.required],
      codigo: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  handlePagosForm(): void {
    if (this.pagosForm.valid) {
      this.pagosService.pagos(this.pagosForm.value).subscribe(
        (response: any) => {
          console.log("Pago realizado correctamente, reserva confirmada");
          console.log(response);
        },
        (error: any) => {
          console.error("El pago no se ha podido realizar", error);
        }
      );
    } else {
      console.error("El formulario de pago no es válido");
    }
  }
}
