import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducto } from '../Interfaces/iproducto';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  constructor(private http: HttpClient) {}
  apiurl =
    'http://localhost/aplicaciones_web/03mvc/controllers/productos.controller.php?op=';

  getProductos(): Observable<IProducto[]> {
    console.log(this.apiurl + 'getProductos');
    return this.http.get<IProducto[]>(this.apiurl + 'getProductos');
  }

  deleteProducto(idProducto: number): Observable<number> {
    const formData = new FormData();
    formData.append('idProductos', idProducto.toString());
    return this.http.post<number>(this.apiurl + 'deleteProducto', formData);
  }
}
