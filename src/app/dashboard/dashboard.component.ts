import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SidemenuComponent } from '@shared/sidemenu/sidemenu.component';
import { UsersLoaderComponent } from '../shared/heavy-loaders/users-loader.component';
import { ProductCardComponent } from '../shared/product-card/product-card.component';

@Component({
  standalone: true,
  imports: [RouterModule, SidemenuComponent, UsersLoaderComponent, ProductCardComponent],
  templateUrl: './dashboard.component.html',
  styles: ``,
})
export default class DashboardComponent {}
