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
  showReservasButton = false;

  constructor(private fb: FormBuilder, private pagosService: PagosService) {
    this.pagosForm = this.fb.group({
      nombre: ['', Validators.required],
      tarjeta: ['', [Validators.required, Validators.pattern('[0-9]{16}')]],
      fecha: ['', Validators.required],
      codigo: ['', [Validators.required, Validators.pattern('[0-9]{3}')]]
    });
  }

  ngOnInit(): void {}

  handlePagosForm(): void {
    if (this.pagosForm.valid) {
      this.pagosService.pagos(this.pagosForm.value).subscribe(
        (response: any) => {
          console.log("Pago realizado correctamente, reserva confirmada");
          console.log(response);
          this.pagosForm.reset();
          alert('Pago realizado correctamente. Su reserva ha sido confirmada.');
          this.showReservasButton = true;
        },
        (error: any) => {
          console.error("El pago no se ha podido realizar", error);
          alert('El pago no se ha podido realizar. Inténtelo más tarde.');
        }
      );
    } else {
      console.error("El formulario de pago no es válido");
      alert('El formulario de pago no es válido.');
    }
  }
}
