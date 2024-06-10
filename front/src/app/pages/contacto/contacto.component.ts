import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  public contactForm : FormGroup;

  constructor(private fb: FormBuilder, private contactService: ContactService) {
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      mensaje: ['', Validators.required]
    })
  }

handleContactForm() {
  if (this.contactForm.valid) {
    this.contactService.contact(this.contactForm.value).subscribe(
      (response) => {
        console.log("Formulario enviado correctamente");
        // Aquí puedes hacer algo después de enviar el formulario, como mostrar un mensaje de éxito o redirigir al usuario.
      },
      (error) => {
        console.error("Error al enviar el formulario:", error);
        // Aquí puedes manejar el error, como mostrar un mensaje de error al usuario.
      }
    );
  } else {
    console.error("El formulario no es válido");
    // Aquí puedes manejar el caso cuando el formulario no es válido, como mostrar un mensaje al usuario.
  }
}
}