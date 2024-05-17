import { Component, OnInit, inject } from '@angular/core';

import { TablaComponent } from '../../components/tabla/tabla.component';
import { ProductoInterface } from '../../core/interface/producto.interface';
import Swal from 'sweetalert2';
import { ProductosService } from '../../services/productos/productos.service';
import { ProductoModel } from '../../core/models/producto.model';

@Component({
  selector: 'app-productos',
  standalone: true,
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
  imports: [TablaComponent],
})
export class ProductosComponent implements OnInit {
  misProductos: ProductoModel[] = [];
  titulo: string = 'Lista de Productos';
  columnas: string[] = [];
  informacion: any;

  productosService = inject(ProductosService);

  ngOnInit(): void {
    this.productosService
      .getProductos()
      .subscribe((productos: ProductoModel[]) => {
        this.misProductos = productos;
        this.obtenerColumnas(this.misProductos);
      });
  }

  obtenerColumnas(productos: ProductoModel[]) {
    if (productos?.length > 0) {
      this.columnas = Object.keys(productos[0]);
    }
  }

  recibirInformacion(data: any) {
    this.informacion = data;
    Swal.fire({
      title: 'Información',
      text: 'You clicked the button!',
      html: `<ul>
              <li> <b>Nombre: </b>${this.informacion.nombre}</li>

              <li> <b>SKU: </b>${this.informacion.sku}</li>

              <li> <b>Precio: </b>${this.informacion.precio}</li>

              <li> <b>Cantidad: </b>${this.informacion.cantidad}</li>
            </ul>`,
      icon: 'success',
    });
  }
}
