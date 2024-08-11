import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProveedor } from '../Interfaces/iproveedor';

@Injectable({
  providedIn: 'root',
})
export class ProveedorService {
  apiurl =
    'http://localhost/aplicaciones_web/03mvc/controllers/proveedores.controller.php?op=';
  constructor(private lector: HttpClient) {}

  //TODO: Metodo para mostrar todos los registros
  getProveedores(): Observable<IProveedor[]> {
    console.log(this.apiurl + 'getProveedores');
    return this.lector.get<IProveedor[]>(this.apiurl + 'getProveedores');
  }

  //TODO: Metodo para eliminar un registro
  eliminarProveedor(idProveedor: number): Observable<number> {
    const formData = new FormData();
    formData.append('idProveedores', idProveedor.toString());
    return this.lector.post<number>(this.apiurl + 'deleteProveedor', formData);
  }
}
