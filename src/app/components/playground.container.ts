import {PlaygroundDirective} from './playground.directive';
import {Component, ComponentFactoryResolver, ViewChild} from '@angular/core';
import {GameService} from '../services/game.service';
import {GameType} from '../models/game-type.model';
import {PlaygroundModel} from '../models/playground.model';

@Component({
  selector: 'playgroundContainer',
  templateUrl: './playground.container.html'
})
export class PlaygroundContainer {

  @ViewChild(PlaygroundDirective) playgroundHost: PlaygroundDirective;
  playground: PlaygroundModel;

  constructor(private game: GameService, private componentFactoryResolver: ComponentFactoryResolver) {
  }

  createGame(gameType: GameType) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(gameType.gameClass);
    const viewContainerRef = this.playgroundHost.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    this.playground = (<PlaygroundModel>componentRef.instance);
    this.playground.container = this;
  }

  quit() {
    this.playground = null;
    this.game.resetScore();
  }

  showSettings() {
    this.playground.reset();
    this.playground.settingsOpen = true;
  }

  getNumbers(): number[] {
    const numbers: number[] = [];
    for (let i = 1; i <= 20; i++) {
      numbers[i - 1] = i;
    }
    return numbers;
  }

  getGame() {
    if (this.playground) {
      return this.playground.game;
    }
    return this.game;
  }

  isPlaygroundDisplayed(): boolean {
    return this.playground != null;
  }

  isPlaygroundSettings(): boolean {
    if (this.playground) {
      return this.playground.settingsOpen;
    }
    return false;
  }

  isFieldEnabledToThrow(field: number): boolean {
    if (this.playground) {
      return this.playground.isFieldEnabledToThrow(field);
    }
    return false;
  }

  isHighlighted(field: number): boolean {
    if (this.playground) {
      return this.playground.isHighlighted(field);
    }
    return false;
  }

  isSecondHighlighted(field: number): boolean {
    if (this.playground) {
      return this.playground.isSecondHighlighted(field);
    }
    return false;
  }
}
