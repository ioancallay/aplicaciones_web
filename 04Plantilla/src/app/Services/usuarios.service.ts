import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUsuarios } from '../Interfaces/iusuarios';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  apiurl = 'http://localhost/aplicaciones_web/03mvc/controllers/usuarios.controller.php?op=';

  constructor(
    private lector: HttpClient,
    private navegacion: Router,
    private rutas: ActivatedRoute
  ) {}

  login(usuario: IUsuarios){
    return this.lector.post<IUsuarios>(this.apiurl + 'login', usuario).subscribe((respuesta)=>{
      if(respuesta){
        sessionStorage.setItem('Nombre_Usuario', respuesta.Nombre_Usuario);
        sessionStorage.setItem('Roles_idRoles', respuesta.Roles_idRoles.toString());
        localStorage.setItem('Roles_idRoles', respuesta.Roles_idRoles.toString());
        this.navegacion.navigate(['/dashboard/default']);
      }
    });
  }
}
 