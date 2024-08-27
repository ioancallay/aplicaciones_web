import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICliente } from '../Interfaces/icliente';


@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  constructor(private http: HttpClient) {}

  apiUrl =
    'http://localhost/aplicaciones_web/03mvc/controllers/clientes.controller.php?op=';

  //TODO: Metodo para moostrar todos los clientes

  getClientes(): Observable<ICliente[]> {
    return this.http.get<ICliente[]>(this.apiUrl + 'getClientes');
  }

  deleteCliente(idClientes: number): Observable<number> {
    const formData = new FormData();
    formData.append('idClientes', idClientes.toString());
    return this.http.post<number>(this.apiUrl + 'deleteCliente', formData);
  }

  insertarCliente(cliente: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    
    const body = `Nombres=${encodeURIComponent(cliente.Nombres)}&Direccion=${encodeURIComponent(cliente.Direccion)}&Telefono=${encodeURIComponent(cliente.Telefono)}&Cedula=${encodeURIComponent(cliente.Cedula)}&Correo=${encodeURIComponent(cliente.Correo)}`;

    return this.http.post(`${this.apiUrl}insertCliente`, body, { headers });
  }
}
