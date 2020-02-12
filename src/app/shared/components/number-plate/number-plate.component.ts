import {Component, Input} from '@angular/core';
import {GameService} from '~services/game.service';

@Component({
  selector: 'app-number-plate',
  templateUrl: './number-plate.component.html',
  styleUrls: ['./number-plate.component.scss']
})
export class NumberPlateComponent {

  @Input() playground: any;

  constructor(public game: GameService) {
  }

  getNumbers(): number[] {
    const numbers: number[] = [];
    for (let i = 1; i <= 20; i++) {
      numbers[i - 1] = i;
    }
    return numbers;
  }

  getNumberColor(field: number): string {
    if (this.playground.isHighlighted(field)) {
      return 'primary';
    } else if (this.playground.isSecondHighlighted(field)) {
      return 'accent';
    }
    return '';
  }

  isNumberDisabled(field: number): boolean {
    return !this.playground.isFieldEnabledToThrow(field) && !this.getNumberColor(field);
  }

  throwNumber(field: number) {
    this.playground.throwNumber(this.playground.isFieldEnabledToThrow(field) ? field : 0);
  }
}

