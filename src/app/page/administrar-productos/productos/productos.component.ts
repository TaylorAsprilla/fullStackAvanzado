import { Component, Inject, OnInit, inject } from '@angular/core';
import { TablaComponent } from '../../../components/tabla/tabla.component';
import { ProductoInterface } from '../../../core/interface/producto.interface';
import Swal from 'sweetalert2';
import { ProductosService } from '../../../services/productos/productos.service';
import { ProductoModel } from '../../../core/models/producto.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PATH } from '../../../core/enum/path.enum';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-productos',
  standalone: true,
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
  imports: [TablaComponent],
})
export class ProductosComponent implements OnInit {
  misProductos: ProductoInterface[] = [];
  productos: ProductoModel[] = [];

  productosResolver: any;

  titulo: string = 'Lista de Productos';
  columnas: string[] = [];
  informacion: ProductoModel | undefined;

  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private productosService = inject(ProductosService);

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos() {
    this.activatedRoute.data.subscribe(({ productos }) => {
      this.misProductos = productos;
    });

    this.obtenerColumnas(this.misProductos);
  }

  resumenDeProducto(producto: ProductoModel): ProductoInterface {
    return {
      nombre: producto.nombre,
      sku: producto.sku,
      cantidad: producto.cantidad,
      precio: producto.precio,
      createAt: producto.createdAt,
    };
  }

  obtenerColumnas(productos: ProductoInterface[]) {
    if (productos?.length > 0) {
      this.columnas = Object.keys(productos[0]);
    }
  }

  recibirInformacion(data: ProductoInterface) {
    this.informacion = this.productos.find(
      (producto) => producto.sku === data.sku
    );

    if (this.informacion) {
      Swal.fire({
        title: 'Información',
        html: `<ul>
              <li> <b>Nombre: </b>${this.informacion.nombre}</li>

              <li> <b>SKU: </b>${this.informacion.sku}</li>

              <li> <b>Precio: </b>${this.informacion.precio}</li>

              <li> <b>Cantidad: </b>${this.informacion.cantidad}</li>

              <li> <b>Nombre Distribuidor: </b>${this.informacion.distribuidor.razonSocial}</li>

              <li> <b>Dirección Distribuidor: </b>${this.informacion.distribuidor.direccion}</li>

              <li> <b>Telefono del Distribuidor: </b>${this.informacion.distribuidor.telefono}</li>

              <li> <b>Usuario que registró: </b>${this.informacion.usuario.nombre}</li>

              <li> <b>Calificación: </b>${this.informacion.opiniones?.calificacion}</li>

            </ul>`,
        icon: 'success',
      });
    }
  }

  crearProductos() {
    this.router.navigateByUrl(`${PATH.CREAR_PRODUCTOS}`);
  }

  eliminar(data: ProductoModel) {
    this.productosService.eliminarProducto(data._id).subscribe((resp: any) => {
      Swal.fire('Producto Eliminado', `${resp.msg}`, 'success');
      this.cargarProductos();
    });
  }
}
