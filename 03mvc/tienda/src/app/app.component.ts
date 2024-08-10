import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IProveedor } from './Interfaces/iproveedor';
import { ProveedorService } from './Services/proveedor.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Lista proveedores';

  listaProveedores: IProveedor[] = [];
  constructor(private ServicioProveedor: ProveedorService) {}

  ngOnInit() {
    this.cargarProveedores();
  }

  cargarProveedores() {
    this.ServicioProveedor.getProveedores().subscribe((data) => {
      this.listaProveedores = data;
    });
  }

  eliminarProveedor(idProveedor: number) {
    this.ServicioProveedor.eliminar(idProveedor).subscribe((data) => {
      this.cargarProveedores();
    });
  }
}
