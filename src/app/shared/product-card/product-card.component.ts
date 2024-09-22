import { Component, Input } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

@Component({
  standalone: true,
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  imports: [ButtonComponent],
})
export class ProductCardComponent {
  @Input() title: string = '';
  @Input() stock: number = 0;
  @Input() buttonType: 'success' | 'danger' = 'success'; // Nuevo input para tipo de botón
  @Input() buttonText: string = 'Comprar'; // Nuevo input para texto de botón
}
