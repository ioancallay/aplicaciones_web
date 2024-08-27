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
  cliente = {
    Nombres: '',
    Direccion: '',
    Telefono: '',
    Cedula: '',
    Correo: '',
  };
  // public page: number;
  title = 'Lista clientes';
  clienteSeleccionado: ICliente[] = [];
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

  guardarCliente(): void {
    this.ServicioClientes.insertarCliente(this.cliente).subscribe(
      (response) => {
        console.log('Cliente insertado exitosamente:', response);
        this.resetForm();
      },
      (error) => {
        console.error('Error al insertar el cliente:', error);
      }
    );
  }

  resetForm(): void {
    this.cliente = {
      Nombres: '',
      Direccion: '',
      Telefono: '',
      Cedula: '',
      Correo: '',
    };
  }
}
