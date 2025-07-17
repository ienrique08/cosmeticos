import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Importa esto
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  nombre = '';
  email = '';
  mensaje = '';

  constructor(private http: HttpClient) {}

  enviarFormulario() {
    const datos = {
      nombre: this.nombre,
      email: this.email,
      mensaje: this.mensaje
    };

    this.http.post('http://localhost:3000/api/correo/enviar-correo', datos).subscribe({
      next: () => alert('📩 Mensaje enviado correctamente'),
      error: () => alert('❌ Error al enviar el mensaje')
    });
  }
}
