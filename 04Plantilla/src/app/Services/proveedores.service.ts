import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProveedores } from '../Interfaces/iproveedores';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  apiurl = 'http://localhost/aplicaciones_web/03mvc/controllers/proveedores.controller.php?op=';
  constructor(private lector: HttpClient) {}

  //TODO: Metodo para mostrar todos los registros
  todos(): Observable<IProveedores[]> {
    return this.lector.get<IProveedores[]>(this.apiurl + 'todos');
  }

  uno(idProveedor: number): Observable<IProveedores> {
    const formData = new FormData();
    formData.append('idProveedores', idProveedor.toString());
    return this.lector.post<IProveedores>(this.apiurl + 'uno', formData);
  }

  //TODO: Metodo para eliminar un registro
  eliminar(idProveedor: number): Observable<number> {
    const formData = new FormData();
    formData.append('idProveedores', idProveedor.toString());
    return this.lector.post<number>(this.apiurl + 'eliminar', formData);
  }

  insertar(proveedor: IProveedores): Observable<string> {
    const formData = new FormData();
    formData.append('Nombre_Empresa', proveedor.Nombre_Empresa);
    formData.append('Direccion', proveedor.Direccion);
    formData.append('Telefono', proveedor.Telefono);
    formData.append('Contacto_Empresa', proveedor.Contacto_Empresa);
    formData.append('Telefono_Contacto', proveedor.Telefono_Contacto);
    return this.lector.post<string>(this.apiurl + 'insertar', formData);
  }

  actualizar(proveedor: IProveedores): Observable<string> {
    const formData = new FormData();
    formData.append('idProveedores', proveedor.idProveedores.toString());
    formData.append('Nombre_Empresa', proveedor.Nombre_Empresa);
    formData.append('Direccion', proveedor.Direccion);
    formData.append('Telefono', proveedor.Telefono);
    formData.append('Contacto_Empresa', proveedor.Contacto_Empresa);
    formData.append('Telefono_Contacto', proveedor.Telefono_Contacto);
    return this.lector.post<string>(this.apiurl + 'actualizar', formData);
  }
}
