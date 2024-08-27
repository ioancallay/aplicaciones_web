import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  MaxLengthValidator,
  ReactiveFormsModule,
  ValidationErrors,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { kMaxLength } from 'buffer';
import { IClientes } from 'src/app/Interfaces/iclientes';
import { ClientesService } from 'src/app/Services/clientes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevocliente',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './nuevocliente.component.html',
  styleUrl: './nuevocliente.component.scss'
})
export class NuevoclienteComponent {
  constructor(
    private ClienteServicio: ClientesService,
    private navegacion: Router
  ) {}

  frm_Cliente = new FormGroup({
    Nombres: new FormControl('', Validators.required),
    Direccion: new FormControl('', Validators.required),
    Telefono: new FormControl('', Validators.required),
    Cedula: new FormControl('', [Validators.required, this.validadorCedulaEcuador]),
    Correo: new FormControl('', [Validators.required, Validators.email])
  });
  idClientes = 0;
  titulo = 'Nuevo Cliente';
  btn_save = 'Crear cliente';

  grabar() {
    let cliente: IClientes = {
      idClientes: this.idClientes,
      Nombres: this.frm_Cliente.controls['Nombres'].value,
      Direccion: this.frm_Cliente.controls['Direccion'].value,
      Telefono: this.frm_Cliente.controls['Telefono'].value,
      Cedula: this.frm_Cliente.controls['Cedula'].value,
      Correo: this.frm_Cliente.controls['Correo'].value
    };
    Swal.fire({
      title: 'Clientes',
      text: 'Desea crear el cliente ' + this.frm_Cliente.controls['Nombres'].value,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#blue',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Crear cliente!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.ClienteServicio.insertarCliente(cliente).subscribe((data) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 2000
          });
          this.navegacion.navigate(['/clientes']);
        });
      }
    });
  }

  validadorCedulaEcuador(control: AbstractControl): ValidationErrors | null {
    const cedula = control.value;
    if (!cedula) return null;
    if (cedula.length !== 10) return { cedulaInvalida: true };
    const provincia = parseInt(cedula.substring(0, 2), 10);
    if (provincia < 1 || provincia > 24) return { cedulaInvalida: true };
    const tercerDigito = parseInt(cedula.substring(2, 3), 10);
    if (tercerDigito < 0 || tercerDigito > 5) return { cedulaInvalida: true };
    const ultimoDigito = parseInt(cedula.substring(9, 10), 10);
    let suma = 0;
    const multiplicadores = [2, 1, 2, 1, 2, 1, 2, 1, 2];
    for (let i = 0; i < 9; i++) {
      const digito = parseInt(cedula.substring(i, i + 1), 10) * multiplicadores[i];
      suma += digito > 9 ? digito - 9 : digito;
    }
    const resto = suma % 10;
    const digitoVerificador = resto === 0 ? 0 : 10 - resto;
    if (digitoVerificador !== ultimoDigito) return { cedulaInvalida: true };
    return null;
  }
}
