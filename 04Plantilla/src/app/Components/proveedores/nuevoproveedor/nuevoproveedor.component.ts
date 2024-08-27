import { IProveedores } from './../../../Interfaces/iproveedores';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProveedoresService } from 'src/app/Services/proveedores.service';

@Component({
  selector: 'app-nuevoproveedor',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './nuevoproveedor.component.html',
  styleUrl: './nuevoproveedor.component.scss'
})
export class NuevoproveedorComponent implements OnInit {
  titulo = 'Agregar proveedor';
  btn_save = 'Crear proveedor';
  idProveedores = 0;
  Nombre_Empresa;
  Direccion;
  Telefono;
  Contacto_Empresa;
  Telefono_Contacto;

  constructor(
    private ProveedorServicio: ProveedoresService,
    private navegacion: Router,
    private rutas: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idProveedores = parseInt(this.rutas.snapshot.paramMap.get('idProveedores'));
    if (this.idProveedores > 0) {
      this.ProveedorServicio.getProveedorPorID(this.idProveedores).subscribe((proveedor) => {
        this.Nombre_Empresa = proveedor.Nombre_Empresa;
        this.Direccion = proveedor.Direccion;
        this.Telefono = proveedor.Telefono;
        this.Contacto_Empresa = proveedor.Contacto_Empresa;
        this.Telefono_Contacto = proveedor.Telefono_Contacto;
        this.titulo = 'Editar proveedor';
        this.btn_save = 'Actualizar proveedor';
      });
    }
  }

  limpiarCaja() {
    alert('Muestra');
  }

  grabar() {
    let iproveedor: IProveedores = {
      idProveedores: 0,
      Nombre_Empresa: this.Nombre_Empresa,
      Direccion: this.Direccion,
      Telefono: this.Telefono,
      Contacto_Empresa: this.Contacto_Empresa,
      Telefono_Contacto: this.Telefono_Contacto
    };

    if (this.idProveedores == 0 || isNaN(this.idProveedores)) {
      this.ProveedorServicio.insertarProveedor(iproveedor).subscribe((respuesta) => {
        // respuesta > 1 ? alert('Grabado con exito') : alert('Error al grabar');
        // console.log(respuesta);

        if (parseInt(respuesta) > 1) {
          alert('Grabado con exito');
          this.navegacion.navigate(['/proveedores']);
        } else {
          alert('Error al grabar');
        }
      });
    } else {
      iproveedor.idProveedores = this.idProveedores;
      this.ProveedorServicio.actualizarProveedor(iproveedor).subscribe((respuesta) => {
        if (parseInt(respuesta) > 1) {
          alert('Actualizado con exito');
          this.navegacion.navigate(['/proveedores']);
        } else {
          alert('Error al actualizar');
        }
      });
    }
  }
}
