import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICliente } from '../Interfaces/icliente';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  constructor(private http: HttpClient) {}

  apiurl =
    'http://localhost/aplicaciones_web/03mvc/controllers/clientes.controller.php?op=';

  //TODO: Metodo para moostrar todos los clientes

  getClientes(): Observable<ICliente[]> {
    return this.http.get<ICliente[]>(this.apiurl + 'getClientes');
  }

  deleteCliente(idClientes: number): Observable<number> {
    const formData = new FormData();
    formData.append('idClientes', idClientes.toString());
    return this.http.post<number>(this.apiurl + 'deleteCliente', formData);
  }
}
