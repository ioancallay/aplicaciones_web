import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ClientComponent } from './Components/client/client.component';
import { ProductComponent } from './Components/product/product.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { ProveedorComponent } from './Components/proveedor/proveedor.component';

//TODO: Rutas de navegación
export const routes: Routes = [
  { path: 'home', title: 'Home', component: HomeComponent },
  { path: 'client', title: 'Clientes', component: ClientComponent },
  { path: 'product', title: 'Productos', component: ProductComponent },
  { path: 'proveedor', title: 'Proveedores', component: ProveedorComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },
];
