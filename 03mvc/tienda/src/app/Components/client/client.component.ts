import { Title } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { ClienteService } from '../../Services/cliente.service';
import { ICliente } from '../../Interfaces/icliente';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
})
export class ClientComponent {
  // public page: number;
  title = 'Lista clientes';
  constructor(private ServicioClientes: ClienteService) {}
  ngOnInit() {
    this.cargarClientes();
  }

  listaClientes: ICliente[] = [];

  cargarClientes() {
    this.ServicioClientes.getClientes().subscribe((data) => {
      this.listaClientes = data;
    });
  }

  deleteCliente(id: number) {
    this.ServicioClientes.deleteCliente(id).subscribe((data) => {
      this.cargarClientes();
    });
  }
}
