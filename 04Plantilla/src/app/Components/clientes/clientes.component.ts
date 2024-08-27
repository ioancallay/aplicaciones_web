import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IClientes } from 'src/app/Interfaces/iclientes';
import { ClientesService } from 'src/app/Services/clientes.service';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-clientes',
  standalone: true,
  imports: [SharedModule, RouterLink],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.scss'
})
export class ClientesComponent {
  title = 'Lista de clientes';
  listaClientes: IClientes[] = [];

  constructor(private ServicioCliente: ClientesService) {}

  ngOnInit() {
    this.cargarClientes();
  }

  cargarClientes() {
    this.ServicioCliente.getClientes().subscribe((data) => (this.listaClientes = data));
  }

  eliminarCliente(idClientes: number) {
    this.ServicioCliente.eliminarCliente(idClientes).subscribe((data) => {
      console.log(data);
      this.cargarClientes();
    });
  }
}
