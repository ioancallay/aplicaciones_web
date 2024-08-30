import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IClientes } from '../Interfaces/iclientes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  apiurl = 'http://localhost/aplicaciones_web/03mvc/controllers/clientes.controller.php?op=';

  constructor(private http: HttpClient) {}

  //TODO: Metodo para mostrar todos los registros
  todos(): Observable<IClientes[]> {
    return this.http.get<IClientes[]>(this.apiurl + 'todos');
  }

  uno(idClientes: number): Observable<IClientes> {
    const formData = new FormData();
    formData.append('idClientes', idClientes.toString());
    return this.http.post<IClientes>(this.apiurl + 'uno', formData);
  }

  //TODO: Metodo para eliminar un registro
  eliminar(idClientes: number): Observable<number> {
    const formData = new FormData();
    formData.append('idClientes', idClientes.toString());
    return this.http.post<number>(this.apiurl + 'eliminar', formData);
  }

  insertar(cliente: IClientes): Observable<string> {
    const formData = new FormData();
    formData.append('Nombres', cliente.Nombres);
    formData.append('Direccion', cliente.Direccion);
    formData.append('Telefono', cliente.Telefono);
    formData.append('Cedula', cliente.Cedula);
    formData.append('Correo', cliente.Correo);
    return this.http.post<string>(this.apiurl + 'insertar', formData);
  }

  actualizar(cliente: IClientes): Observable<string> {
    const formData = new FormData();
    formData.append('idClientes', cliente.idClientes.toString());
    formData.append('Nombres', cliente.Nombres);
    formData.append('Direccion', cliente.Direccion);
    formData.append('Telefono', cliente.Telefono);
    formData.append('Cedula', cliente.Cedula);
    formData.append('Correo', cliente.Correo);
    return this.http.post<string>(this.apiurl + 'actualizar', formData);
  }
}
