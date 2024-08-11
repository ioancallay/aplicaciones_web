import { Component } from '@angular/core';
import { IProveedor } from '../../Interfaces/iproveedor';
import { ProveedorService } from '../../Services/proveedor.service';

@Component({
  selector: 'app-proveedor',
  standalone: true,
  imports: [],
  templateUrl: './proveedor.component.html',
  styleUrl: './proveedor.component.css',
})
export class ProveedorComponent {
  title = 'Lista proveedores';

  listaProveedores: IProveedor[] = [];
  constructor(private ServicioProveedores: ProveedorService) {}

  ngOnInit() {
    this.cargarProveedores();
  }

  cargarProveedores() {
    this.ServicioProveedores.getProveedores().subscribe((data) => {
      this.listaProveedores = data;
    });
  }

  eliminarProveedor(idProveedor: number) {
    this.ServicioProveedores.eliminar(idProveedor).subscribe((data) => {
      this.cargarProveedores();
    });
  }
}
