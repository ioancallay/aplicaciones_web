import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IProveedores } from 'src/app/Interfaces/iproveedores';
import { ProveedoresService } from 'src/app/Services/proveedores.service';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@Component({
  selector: 'app-proveedores',
  standalone: true,
  imports: [SharedModule, RouterLink],
  templateUrl: './proveedores.component.html',
  styleUrl: './proveedores.component.scss'
})
export class ProveedoresComponent {
  title = 'Lista proveedores';

  listaProveedores: IProveedores[] = [];
  constructor(private ServicioProveedores: ProveedoresService) {}

  ngOnInit() {
    this.cargarProveedores();
  }

  cargarProveedores() {
    this.ServicioProveedores.getProveedores().subscribe((data) => {
      this.listaProveedores = data;
    });
  }

  eliminarProveedor(idProveedor: number) {
    this.ServicioProveedores.eliminarProveedor(idProveedor).subscribe((data) => {
      console.log(data);
      this.cargarProveedores();
    });
  }
}
