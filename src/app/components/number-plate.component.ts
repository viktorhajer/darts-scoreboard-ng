import {Component, Input} from '@angular/core';
import {GameService} from '../services/game.service';
import {PlaygroundModel} from '../models/playground.model';

@Component({
  selector: 'app-number-plate',
  templateUrl: './number-plate.component.html'
})
export class NumberPlateComponent {

  @Input() playground: PlaygroundModel;

  constructor(public game: GameService){
  }

  getNumbers(): number[] {
    const numbers: number[] = [];
    for (let i = 1; i <= 20; i++) {
      numbers[i - 1] = i;
    }
    return numbers;
  }
}

