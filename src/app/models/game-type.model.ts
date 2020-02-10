import {Type} from '@angular/core';
import {PlaygroundModel} from './playground.model';

export class GameType {
  title: string;
  gameClass: Type<PlaygroundModel>;

  constructor(title: string, gameClass: Type<PlaygroundModel>) {
    this.title = title;
    this.gameClass = gameClass;
  }
}
