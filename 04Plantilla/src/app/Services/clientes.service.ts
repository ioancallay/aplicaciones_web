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
  getClientes(): Observable<IClientes[]> {
    console.log(this.apiurl + 'getClientees');
    return this.http.get<IClientes[]>(this.apiurl + 'getClientes');
  }

  getClientePorID(idClientes: number): Observable<IClientes> {
    const formData = new FormData();
    formData.append('idClientes', idClientes.toString());
    return this.http.post<IClientes>(this.apiurl + 'getClientePorID', formData);
  }

  //TODO: Metodo para eliminar un registro
  eliminarCliente(idClientes: number): Observable<number> {
    const formData = new FormData();
    formData.append('idClientes', idClientes.toString());
    return this.http.post<number>(this.apiurl + 'deleteCliente', formData);
  }

  insertarCliente(cliente: IClientes): Observable<string> {
    const formData = new FormData();
    formData.append('Nombres', cliente.Nombres);
    formData.append('Direccion', cliente.Direccion);
    formData.append('Telefono', cliente.Telefono);
    formData.append('Cedula', cliente.Cedula);
    formData.append('Correo', cliente.Correo);
    return this.http.post<string>(this.apiurl + 'insertCliente', formData);
  }

  actualizarCliente(cliente: IClientes): Observable<string> {
    const formData = new FormData();
    formData.append('idClientes', cliente.idClientes.toString());
    formData.append('Nombres', cliente.Nombres);
    formData.append('Direccion', cliente.Direccion);
    formData.append('Telefono', cliente.Telefono);
    formData.append('Cedula', cliente.Cedula);
    formData.append('Correo', cliente.Correo);
    return this.http.post<string>(this.apiurl + 'updateCliente', formData);
  }
}
