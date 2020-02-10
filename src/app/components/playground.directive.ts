import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[playground-host]',
})
export class PlaygroundDirective {
  constructor(public viewContainerRef: ViewContainerRef) {
  }
}
