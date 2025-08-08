import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private apiUrl = 'https://vellabackend.onrender.com/api/productos';

  constructor(private http: HttpClient) {}

  obtenerProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  agregarProducto(producto: FormData): Observable<any> {
    return this.http.post(this.apiUrl, producto);
  }
  eliminarProducto(id: number): Observable<any> {
    return this.http.delete(`https://vellabackend.onrender.com/api/productos/${id}`);
  }


  obtenerProductoPorId(id: number): Observable<Producto> {
  return this.http.get<Producto>(`${this.apiUrl}/${id}`);
}

editarProducto(id: number, producto: FormData): Observable<any> {
  return this.http.put(`${this.apiUrl}/${id}`, producto);
}



}
