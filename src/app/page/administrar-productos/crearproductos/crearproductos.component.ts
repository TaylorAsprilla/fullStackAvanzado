import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-crearproductos',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './crearproductos.component.html',
  styleUrl: './crearproductos.component.css',
})
export class CrearproductosComponent implements OnInit {
  productoForm: FormGroup;

  private formBuilder = inject(FormBuilder);

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
    console.log(this.productoForm);
  }
}
