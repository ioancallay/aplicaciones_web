import { Component } from '@angular/core';
import { ProductoService } from '../../Services/producto.service';
import { IProducto } from '../../Interfaces/iproducto';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  constructor(private ServicioProductos: ProductoService) {}
  apiurl =
    'http://localhost/aplicaciones_web/03mvc/controllers/productos.controller.php?op=';

  ngOnInit() {
    this.cargarProductos();
  }

  listaProductos: IProducto[] = [];
  cargarProductos() {
    this.ServicioProductos.getProductos().subscribe((data) => {
      this.listaProductos = data;
    });
  }

  deleteProducto(id: number) {
    this.ServicioProductos.deleteProducto(id).subscribe((data) => {
      this.cargarProductos();
    });
  }
}
