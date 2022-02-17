import {Component, Input} from '@angular/core';
import {GameService} from '~services/game.service';
import {Playground} from '~models/playground.model';
import {ApplicationStateService} from '~services/application-state.service';

@Component({
  selector: 'app-number-plate-shanghai',
  templateUrl: './number-plate-shanghai.component.html',
  styleUrls: ['./number-plate-shanghai.component.scss']
})
export class NumberPlateShanghaiComponent {

  @Input() actualIndex: number;
  @Input() playground: any;

  constructor(public game: GameService,
              public application: ApplicationStateService) {
  }

  next() {
    this.playground.skip();
  }

  win() {
    const score = this.actualIndex + 1;
    this.playground.throwNumber([score, score]);
    this.playground.doublePoint();
    this.playground.throwNumber([score, score]);
    this.playground.triplePoint();
    this.playground.throwNumber([score, score]);
  }

  throwNumber(count: number) {
    const score = this.actualIndex + 1;
    switch (count) {
      case 1:
        this.playground.throwNumber([score, score]);
        this.playground.skip();
        break;
      case 2:
        this.playground.throwNumber([score, score]);
        this.playground.throwNumber([score, score]);
        this.playground.skip();
        break;
      case 3:
        this.playground.throwNumber([score, score]);
        this.playground.throwNumber([score, score]);
        this.playground.throwNumber([score, score]);
        break;
      case 4:
        this.playground.throwNumber([score, score]);
        this.playground.triplePoint();
        this.playground.throwNumber([score, score]);
        this.playground.skip();
        break;
      case 5:
        this.playground.doublePoint();
        this.playground.throwNumber([score, score]);
        this.playground.triplePoint();
        this.playground.throwNumber([score, score]);
        this.playground.skip();
        break;
      case 6:
        this.playground.triplePoint();
        this.playground.throwNumber([score, score]);
        this.playground.triplePoint();
        this.playground.throwNumber([score, score]);
        this.playground.skip();
        break;
      case 7:
        this.playground.throwNumber([score, score]);
        this.playground.triplePoint();
        this.playground.throwNumber([score, score]);
        this.playground.triplePoint();
        this.playground.throwNumber([score, score]);
        break;
      case 8:
        this.playground.doublePoint();
        this.playground.throwNumber([score, score]);
        this.playground.triplePoint();
        this.playground.throwNumber([score, score]);
        this.playground.triplePoint();
        this.playground.throwNumber([score, score]);
        break;
      case 9:
        this.playground.triplePoint();
        this.playground.throwNumber([score, score]);
        this.playground.triplePoint();
        this.playground.throwNumber([score, score]);
        this.playground.triplePoint();
        this.playground.throwNumber([score, score]);
        break;
    }
  }
}

