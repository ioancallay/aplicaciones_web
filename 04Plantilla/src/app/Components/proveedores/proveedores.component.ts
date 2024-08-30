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
  listaProveedores: IProveedores[] = [];
  constructor(private ServicioProveedores: ProveedoresService) {}

  ngOnInit() {
    this.cargarProveedores();
  }

  cargarProveedores() {
    this.ServicioProveedores.todos().subscribe((data) => {
      this.listaProveedores = data;
    });
  }

  eliminar(idProveedor: number) {
    this.ServicioProveedores.eliminar(idProveedor).subscribe((data) => {
      this.cargarProveedores();
    });
  }
}
