import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticuloComponent } from './page/articulo/articulo.component';
import { ImagenesComponent } from './page/imagenes/imagenes.component';
import { InicioComponent } from './page/inicio/inicio.component';
import { NombresComponent } from './page/nombres/nombres.component';
import { PersonaComponent } from './page/persona/persona.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { RolDirective } from './core/directives/rol/rol.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet,
    InicioComponent,
    ArticuloComponent,
    NombresComponent,
    PersonaComponent,
    ImagenesComponent,
    HeaderComponent,
    FooterComponent,
    RolDirective,
  ],
})
export class AppComponent {
  title = 'my-first-project';

  nombre: string = 'Walther Gomez';
}
