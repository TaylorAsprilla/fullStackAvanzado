import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuInfoInterface } from '../../core/interface/menu_info.interface';
import { MenuRoutes } from '../../menu/menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  menuItems: MenuInfoInterface[] = [];

  ngOnInit(): void {
    this.menuItems = MenuRoutes;
    console.log(this.menuItems);
  }
}
