import { NavmenuComponent } from './Components/navmenu/navmenu.component';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IProveedor } from './Interfaces/iproveedor';
import { ProveedorService } from './Services/proveedor.service';
import { FooterComponent } from './Components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NavmenuComponent, FooterComponent],
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
    this.ServicioProveedor.eliminarProveedor(idProveedor).subscribe((data) => {
      this.cargarProveedores();
    });
  }
}
