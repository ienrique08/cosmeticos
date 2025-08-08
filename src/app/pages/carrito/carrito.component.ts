import { Component } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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

  constructor(public carrito: CarritoService, private http: HttpClient) {}

  confirmarCompra() {
    if (this.formaPago === 'Tarjeta') {
      if (!this.tarjeta.numero || !this.tarjeta.nombre || !this.tarjeta.expiracion || !this.tarjeta.cvv) return;
    }
    if (this.formaPago === 'Transferencia') {
      if (!this.transferencia.banco || !this.transferencia.cuenta || !this.transferencia.titular) return;
    }

    // Construye el objeto de compra
    const compra = {
      formaPago: this.formaPago,
      tarjeta: this.formaPago === 'Tarjeta' ? this.tarjeta : null,
      transferencia: this.formaPago === 'Transferencia' ? this.transferencia : null,
      total: this.carrito.obtenerTotal(),
      productos: this.carrito.obtenerItems().map(item => ({
        productoId: item.producto.id,
        cantidad: item.cantidad,
        precio: item.producto.precio
      }))
    };

    // Envía la compra al backend
    this.http.post('http://localhost:3000/api/compras', compra).subscribe({
      next: () => {
        this.compraConfirmada = true;
      },
      error: (err) => {
        alert('Error al registrar la compra');
        console.error(err);
      }
    });
  }

  finalizar() {
    this.carrito.limpiar();
    this.compraConfirmada = false;
    this.formaPago = '';
    this.tarjeta = { numero: '', nombre: '', expiracion: '', cvv: '' };
    this.transferencia = { banco: '', cuenta: '', titular: '' };
  }
}
