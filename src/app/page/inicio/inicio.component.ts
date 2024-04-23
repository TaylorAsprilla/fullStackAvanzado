import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class InicioComponent {
  constructor(private router: Router) {}

  abrirModal() {
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: 'Something went wrong!',
      footer: '<a href="#">Why do I have this issue?</a>',
    });
  }

  personas = [
    {
      nombre: 'Walter',
      apellido: 'Gomez',
      edad: 14,
      ciudad: 'Bogotá',
      documento: 154875,
    },
    {
      nombre: 'Ana',
      apellido: 'Martinez',
      edad: 25,
      ciudad: 'Medellín',
      documento: 258963,
    },
    {
      nombre: 'Juan',
      apellido: 'Perez',
      edad: 35,
      ciudad: 'Cali',
      documento: 369852,
    },
    {
      nombre: 'Maria',
      apellido: 'Rodriguez',
      edad: 20,
      ciudad: 'Barranquilla',
      documento: 741852,
    },
    {
      nombre: 'Luisa',
      apellido: 'Lopez',
      edad: 45,
      ciudad: 'Cartagena',
      documento: 963258,
    },
  ];

  cambioArticulo() {
    this.router.navigateByUrl('/articulo');
  }
  cambioInicio() {
    this.router.navigateByUrl('/');
  }
}
