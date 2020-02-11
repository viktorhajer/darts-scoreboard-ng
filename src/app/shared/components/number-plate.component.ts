import {Component, Input} from '@angular/core';
import {GameService} from '../services/game.service';

@Component({
  selector: 'app-number-plate',
  templateUrl: './number-plate.component.html'
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
}

