import { Component } from '@angular/core';

@Component({
  selector: 'app-articulo',
  standalone: true,
  imports: [],
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.css'
})
export class ArticuloComponent {

  imagen:string = "https://www.clevercel.co/cdn/shop/files/iPhone-13-Pro-Sierra-blue_Back-side_700x.jpg?v=1712354183"
  video:string = "https://www.youtube.com/watch?v=T_fOnIbqc94"
}
