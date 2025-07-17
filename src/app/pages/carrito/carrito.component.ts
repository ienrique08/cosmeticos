import { Component } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './carrito.component.html'
})
export class CarritoComponent {
  formaPago: string = '';
  compraConfirmada = false;

  tarjeta = {
    numero: '',
    nombre: '',
    expiracion: '',
    cvv: ''
  };

  transferencia = {
    banco: '',
    cuenta: '',
    titular: ''
  };

  constructor(public carrito: CarritoService) {}

  confirmarCompra() {
    if (this.formaPago === 'Tarjeta') {
      // Aquí podrías validar los datos de la tarjeta
      if (!this.tarjeta.numero || !this.tarjeta.nombre || !this.tarjeta.expiracion || !this.tarjeta.cvv) return;
    }
    if (this.formaPago === 'Transferencia') {
      // Aquí podrías validar los datos de la transferencia
      if (!this.transferencia.banco || !this.transferencia.cuenta || !this.transferencia.titular) return;
    }
    this.compraConfirmada = true;
  }

  finalizar() {
    this.carrito.limpiar();
    this.compraConfirmada = false;
    this.formaPago = '';
    this.tarjeta = { numero: '', nombre: '', expiracion: '', cvv: '' };
    this.transferencia = { banco: '', cuenta: '', titular: '' };
  }
}
