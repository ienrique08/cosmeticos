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
    img: 'assets/images/labial.jpg',
    nombre: 'Labial Mate',
    descripcion: 'Colores intensos y larga duración para labios irresistibles.'
  },
  {
    img: 'assets/images/base.jpg',
    nombre: 'Máscara de Pestañas',
    descripcion: 'Volumen espectacular y definición sin grumos.'
  },
  {
    img: 'assets/images/Paletas.jpg',
    nombre: 'Base de Maquillaje',
    descripcion: 'Cobertura uniforme con acabado natural y duradero.'
  },
  {
    img: 'assets/images/mascara.jpg',
    nombre: 'Mascara de Pestañas',
    descripcion: 'Resalta tus ojos con volumen y longitud excepcionales.'
  },
  {
    img: 'assets/images/corrector.jpg',
    nombre: 'Corrector de Maquillaje',
    descripcion: 'Cubre imperfecciones y ojeras con facilidad.'
  },
  {
    img: 'assets/images/brochas.jpg',
    nombre: 'Set de Brochas',
    descripcion: 'Juego completo de brochas para un maquillaje profesional.'
  },
  {
    img: 'assets/images/fijador.jpg',
    nombre: 'Fijador de Maquillaje',
    descripcion: 'Mantén tu maquillaje intacto todo el día con este fijador.'
  },
  {
    img: 'assets/images/delineador.jpg',
    nombre: 'Delineador de Ojos',
    descripcion: 'Traza líneas precisas y duraderas para un look impactante.'
  },
  {
    img: 'assets/images/lapiz.jpg',
    nombre: 'Lápiz de cejas',
    descripcion: 'Define y da forma a tus cejas con precisión y naturalidad.'
  },
  {
    img: 'assets/images/iluminador.jpg',
    nombre: 'Iluminador',
    descripcion: 'Aporta un brillo radiante a tu rostro con este iluminador.'
  },
  {
    img: 'assets/images/desmaqui.jpg',
    nombre: 'Desmaquillante',
    descripcion: 'Elimina el maquillaje de forma suave y efectiva.'
  },
  {
    img: 'assets/images/crema.jpg',
    nombre: 'Crema Hidratante',
    descripcion: 'Mantén tu piel suave e hidratada con esta crema.'
  },

  {
    img: 'assets/images/mascarilla.jpg',
    nombre: 'Mascarilla Facial',
    descripcion: 'Hidrata y rejuvenece tu piel con esta mascarilla.'
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
