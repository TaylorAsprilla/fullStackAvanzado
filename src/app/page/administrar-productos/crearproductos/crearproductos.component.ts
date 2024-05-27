import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProductosService } from '../../../services/productos/productos.service';
import {
  crearProductoInterface,
  ProductoInterface,
} from '../../../core/interface/producto.interface';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crearproductos',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './crearproductos.component.html',
  styleUrl: './crearproductos.component.css',
})
export class CrearproductosComponent implements OnInit {
  productoForm: FormGroup;

  private formBuilder = inject(FormBuilder);
  private productoService = inject(ProductosService);

  ngOnInit(): void {
    this.productoForm = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      sku: ['', [Validators.required]],
      cantidad: ['', Validators.required],
      precio: ['', Validators.required],
      nit: ['', []],
      razonSocial: ['', []],
      telefono: ['', []],
      direccion: ['', []],
    });
  }

  crearProducto() {
    const data = this.productoForm.value;
    const nuevoProducto: crearProductoInterface = {
      nombre: data.nombre,
      sku: data.sku,
      cantidad: data.cantidad,
      precio: data.precio,
      distribuidor: {
        nit: data.nit,
        razonSocial: data.razonSocial,
        telefono: data.telefono,
        direccion: data.direccion,
      },
    };

    this.productoService
      .crearProductos(nuevoProducto)
      .subscribe((resp: any) => {
        Swal.fire('Producto Creado', `${resp.msg}`, 'success');
        this.resetFormulario();
      });
  }

  resetFormulario() {
    this.productoForm.reset();
  }
}
