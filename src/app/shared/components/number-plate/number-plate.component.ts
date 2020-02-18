import {Component, Input} from '@angular/core';
import {GameService} from '~services/game.service';
import {Playground} from '~models/playground.model';

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

  getNumberColor(fieldIndex: number): string {
    if (this.playground.isHighlighted(fieldIndex)) {
      return 'primary';
    } else if (this.playground.isSecondHighlighted(fieldIndex)) {
      return 'accent';
    }
    return '';
  }

  isNumberDisabled(fieldIndex: number): boolean {
    return !this.playground.isFieldEnabledToThrow(fieldIndex) && !this.getNumberColor(fieldIndex);
  }

  throwNumber(fieldIndex: number) {
    this.playground.throwNumber(this.playground.isFieldEnabledToThrow(fieldIndex) ? Playground.getFieldValueFromIndex(fieldIndex) : 0);
  }
}

