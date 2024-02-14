import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quantity-updater',
  standalone: true,
  imports: [],
  templateUrl: './quantity-updater.component.html',
  styleUrl: './quantity-updater.component.scss',
})
export class QuantityUpdaterComponent {
  @Input() count: number = 1;

  @Output() increment = new EventEmitter<boolean>();
  @Output() decrement = new EventEmitter<boolean>();

  onIncrement() {
    this.increment.emit(true);
  }

  onDecrement() {
    if (this.count === 1) return;

    this.decrement.emit(true);
  }
}
