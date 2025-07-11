import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    HeaderComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

productos = [
   {
    img: 'assets/images/labiaaal.jpg',
    nombre: 'Labial Mate',
    descripcion: 'Colores intensos y larga duración para labios irresistibles.'
  },
  {
    img: 'assets/images/baseaa.jpg',
    nombre: 'Máscara de Pestañas',
    descripcion: 'Volumen espectacular y definición sin grumos.'
  },
  {
    img: 'assets/images/Paletaaas.jpg',
    nombre: 'Base de Maquillaje',
    descripcion: 'Cobertura uniforme con acabado natural y duradero.'
  }
];
pagina = 1;
productosPorPagina = 6;

get totalPaginas() {
  return Math.ceil(this.productos.length / this.productosPorPagina);
}

get productosPaginaActual() {
  const inicio = (this.pagina - 1) * this.productosPorPagina;
  return this.productos.slice(inicio, inicio + this.productosPorPagina);
}

paginaAnterior() {
  if (this.pagina > 1) this.pagina--;
}

paginaSiguiente() {
  if (this.pagina < this.totalPaginas) this.pagina++;
}

}
