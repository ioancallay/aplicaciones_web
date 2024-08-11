import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ClientComponent } from './Components/client/client.component';
import { ProductComponent } from './Components/product/product.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { NavmenuComponent } from './Components/navmenu/navmenu.component';
import { ProveedorComponent } from './Components/proveedor/proveedor.component';

//TODO: Rutas de navegación
export const routes: Routes = [
  { path: 'home', title: 'Home', component: HomeComponent },
  { path: 'client', title: 'Client', component: ClientComponent },
  { path: 'product', title: 'Product', component: ProductComponent },
  { path: 'proveedor', title: 'Proveedor', component: ProveedorComponent },
  { path: 'navmenu', title: 'Menu', component: NavmenuComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },
];
