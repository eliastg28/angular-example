import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true, // Asegúrate de que esto esté aquí
  imports: [CommonModule], // Importa CommonModule aquí
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() type: 'success' | 'danger' = 'success';
  @Input() text: string = 'Button';
}
