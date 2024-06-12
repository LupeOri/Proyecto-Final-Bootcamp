import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PagosService } from '../../services/pagos.service';

@Component({
  selector: 'app-pagos-form',
  templateUrl: './pagos-form.component.html',
  styleUrls: ['./pagos-form.component.css']
})
export class PagosFormComponent {
  public pagosForm: FormGroup;

  constructor(private fb: FormBuilder, private pagos: PagosService) {
    this.pagosForm = this.fb.group({
      nombre: ['', Validators.required],
      tarjeta: ['', Validators.required],
      fecha: ['', Validators.required],
      codigo: ['', Validators.required]
    })
  }

  handlePagosForm() {
    if (this.pagosForm.valid) {
      this.pagosService.pagos(this.pagosForm.value).subscribe(
        (response) => {
          console.log("Pago realizado correctamentem reserva confirmada");
          console.log(response);
          
        },
        (error) => {
          console.error("El pago no se ha podido realizar", error);
  }
      );
} else {
  console.error("El pago no es válido");
}
  }
}