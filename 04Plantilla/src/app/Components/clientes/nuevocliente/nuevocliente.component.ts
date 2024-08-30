import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
export class NuevoclienteComponent implements OnInit {
  frm_Cliente = new FormGroup({
    Nombres: new FormControl('', Validators.required),
    Direccion: new FormControl('', Validators.required),
    Telefono: new FormControl('', [Validators.required, Validators.minLength(9)]),
    Cedula: new FormControl('', [Validators.required, this.validadorCedulaEcuador]),
    Correo: new FormControl('', [Validators.required, Validators.email])
  });

  idClientes = 0;
  titulo = 'Nuevo Cliente';
  btn_save = 'Crear cliente';
  mensaje: string;
  btn_confirm: string;

  constructor(
    private ClienteServicio: ClientesService,
    private navegacion: Router,
    private ruta: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idClientes = parseInt(this.ruta.snapshot.paramMap.get('idClientes'));
    console.log(this.idClientes);

    if (this.idClientes > 0) {
      this.ClienteServicio.uno(this.idClientes).subscribe((uncliente) => {
        this.frm_Cliente.controls['Nombres'].setValue(uncliente.Nombres);
        this.frm_Cliente.controls['Direccion'].setValue(uncliente.Direccion);
        this.frm_Cliente.controls['Telefono'].setValue(uncliente.Telefono);
        this.frm_Cliente.controls['Cedula'].setValue(uncliente.Cedula);
        this.frm_Cliente.controls['Correo'].setValue(uncliente.Correo);

        // this.frm_Cliente.setValue({
        //   Nombres: cliente.Nombres,
        //   Direccion: cliente.Direccion,
        //   Telefono: cliente.Telefono,
        //   Cedula: cliente.Cedula,
        //   Correo: cliente.Correo
        // });
        // this.frm_Cliente.patchValue({
        //   Cedula: cliente.Cedula,
        //   Correo: cliente.Correo,
        //   Nombres: cliente.Nombres,
        //   Direccion: cliente.Direccion,
        //   Telefono: cliente.Telefono
        // });
        this.titulo = 'Editar Cliente';
        this.btn_save = 'Actualizar cliente';
      });
    }
  }

  grabar() {
    let cliente: IClientes = {
      idClientes: this.idClientes,
      Nombres: this.frm_Cliente.controls['Nombres'].value.toUpperCase(),
      Direccion: this.frm_Cliente.controls['Direccion'].value.toUpperCase(),
      Telefono: this.frm_Cliente.controls['Telefono'].value,
      Cedula: this.frm_Cliente.controls['Cedula'].value,
      Correo: this.frm_Cliente.controls['Correo'].value.toLowerCase()
    };

    if (this.idClientes > 0) {
      this.mensaje = 'Desea actualizar el cliente ';
      this.btn_confirm = 'Actualizar cliente!';
    } else {
      this.mensaje = 'Desea crear el cliente ';
      this.btn_confirm = 'Crear cliente!';
    }

    Swal.fire({
      title: 'Clientes',
      text: this.mensaje + this.frm_Cliente.controls['Nombres'].value,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'red',
      cancelButtonColor: '#3085d6',
      confirmButtonText: this.btn_confirm
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.idClientes > 0) {
          this.ClienteServicio.actualizar(cliente).subscribe((data) => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Proceso completado',
              showConfirmButton: false,
              timer: 2000
            });
            this.navegacion.navigate(['/clientes']);
          });
        } else {
          this.ClienteServicio.insertar(cliente).subscribe((data) => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Proceso completado',
              showConfirmButton: false,
              timer: 2000
            });
            this.navegacion.navigate(['/clientes']);
          });
        }
      }
    });
  }

  cambiarLetras() {
    this.frm_Cliente.controls['Nombres'].setValue(this.frm_Cliente.controls['Nombres'].value.toUpperCase());
    this.frm_Cliente.controls['Direccion'].setValue(this.frm_Cliente.controls['Direccion'].value.toUpperCase());
    this.frm_Cliente.controls['Correo'].setValue(this.frm_Cliente.controls['Correo'].value.toLowerCase());
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
