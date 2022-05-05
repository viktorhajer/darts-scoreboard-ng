import {Component, Input, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {GameService} from '~services/game.service';
import {Playground} from '~models/playground.model';
import {ApplicationStateService} from '~services/application-state.service';
import * as d3 from 'd3';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

const ARC_WIDTH = 0.295;

@Component({
  selector: 'app-number-plate-visual',
  templateUrl: './number-plate-visual.component.html',
  styleUrls: ['./number-plate-visual.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NumberPlateVisualComponent implements OnInit, OnDestroy {

  @Input() playground: any;
  numbers = [20, 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5];
  private ngUnsubscribeHasChange = new Subject();

  constructor(public game: GameService,
              public application: ApplicationStateService) {
  }

  ngOnInit() {
    this.drawTable();
    this.playground.hasChanges
      .pipe(takeUntil(this.ngUnsubscribeHasChange))
      .subscribe(flag => this.drawTable());
  }

  ngOnDestroy() {
    this.ngUnsubscribeHasChange.next();
    this.ngUnsubscribeHasChange.complete();
  }

  next() {
    this.playground.skip();
    this.drawTable();
  }

  private drawTable() {
    d3.select('#darts-table-plate svg').remove();
    const svg = d3.select('#darts-table-plate').append('svg').attr('width', '94%')
      .attr('height', '94%').attr('viewBox', '0 0 330 330');
    const numbers = [20, 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5];
    const bullIndex = this.getFieldIndex(25);

    if (this.playground.zeroEnabled) {
      this.drawArcPosition(svg, 20, 25, 30, 'field-color primary');
      this.drawText(svg, '0', 0, 25, 23, -1, 1,
        'number-text', () => this.throwZero());
    }

    this.drawArc(svg, 0, 165, 0, Math.PI * 4, 'field-inactive', -1, 1);
    this.drawArc(svg, 0, 19, 0, Math.PI * 4, 'field-color-m', bullIndex, 2);
    this.drawArc(svg, 20, 49, 0, Math.PI * 4, 'field-color', bullIndex, 1);
    for (let i = 0; i < numbers.length; i++) {
      const fieldIndex = this.getFieldIndex(numbers[i]);
      const colorSlice = 'field-color';
      const colorSliceMulti = 'field-color-m';
      const startAngle = i * Math.PI / 10 - ARC_WIDTH / 2;
      const endAngle = startAngle + ARC_WIDTH;
      this.drawArc(svg, 50, 84, startAngle, endAngle, colorSliceMulti, fieldIndex, 3);
      this.drawArc(svg, 85, 119, startAngle, endAngle, colorSlice, fieldIndex, 1);
      this.drawArc(svg, 120, 144, startAngle, endAngle, colorSliceMulti, fieldIndex, 2);
      this.drawText(svg, numbers[i] + '', i * 18 - 2, 170, 3, fieldIndex, 1, 'number-text' + ' ' + this.getNumberColor(fieldIndex));
      if (!!this.playground.getFieldNote(fieldIndex)) {
        this.drawText(svg, this.playground.getFieldNote(fieldIndex), i * 18 - 2, 170, 14, fieldIndex, 1, 'field-note');
      }
    }
    this.drawText(svg, '25', 0, 165, 127, bullIndex, 1, 'number-text' + ' ' + this.getNumberColor(bullIndex));
    this.drawText(svg, '50', 0, 165, 158.5, bullIndex, 2, 'number-text' + ' ' + this.getNumberColor(bullIndex));
    if (!!this.playground.getFieldNote(bullIndex)) {
      this.drawText(svg, this.playground.getFieldNote(bullIndex), 0, 165, 193, bullIndex, 1, 'field-note');
    }

    this.drawText(svg, '2x', 0, 165, 28, 19, 2, 'number-text smaller' + ' ' + this.getNumberColor(19));
    this.drawText(svg, '1x', 0, 165, 58, 19, 1, 'number-text smaller' + ' ' + this.getNumberColor(19));
    this.drawText(svg, '3x', 0, 165, 92, 19, 3, 'number-text smaller' + ' ' + this.getNumberColor(19));
  }

  private getNumberColor(fieldIndex: number): string {
    if (this.playground.isPrimaryField(fieldIndex)) {
      return 'primary';
    } else if (this.playground.isSecondaryField(fieldIndex)) {
      return 'accent';
    } else if (this.playground.isAlertField(fieldIndex)) {
      return 'alert';
    } else if (!this.playground.isFieldEnabled(fieldIndex)) {
      return 'disabled';
    }
    return '';
  }

  private isNumberDisabled(fieldIndex: number): boolean {
    return !this.playground.isFieldEnabled(fieldIndex) && !this.getNumberColor(fieldIndex);
  }

  private throwNumber(fieldIndex: number, multi: number) {
    if (!this.isNumberDisabled(fieldIndex)) {
      if (multi === 2) {
        this.playground.doublePoint();
      }
      if (multi === 3) {
        this.playground.triplePoint();
      }
      this.playground.throwNumber([this.playground.isFieldEnabled(fieldIndex) ? Playground.getFieldValueFromIndex(fieldIndex) : 0,
        Playground.getFieldValueFromIndex(fieldIndex)]);
    }
    this.drawTable();
    document.querySelector(`path.field_${fieldIndex}_${multi}`).classList.add('clicked');
  }

  private throwZero() {
    if (this.playground.zeroEnabled) {
      this.playground.throwNumber([0,0]);
      this.drawTable();
    }
  }

  private drawText(svg, text: string, rotate: number, x: number, y: number, fieldIndex: number,
                   multi: number, className: string, onclick?: () => void) {
    svg.append('text')
      .attr('x', x)
      .attr('y', y)
      .attr('dy', '1em')
      .attr('text-anchor', 'middle')
      .attr('transform', 'rotate(' + rotate + ', 165, 165)')
      .attr('class', `field_${fieldIndex}_${multi} ${className}`)
      .text(text)
      .on('click', () => onclick ? onclick() : this.throwNumber(fieldIndex, multi));
  }

  private drawArc(svg: any, innerRadius: number, outerRadius: number, startAngle: number, endAngle: number,
                  styleClass: string, fieldIndex: number, multi: number) {
    svg
      .append('path')
      .attr('transform', 'translate(165, 165)')
      .attr('d', d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius)
        .startAngle(startAngle)
        .endAngle(endAngle)
      )
      .attr('class', `field_${fieldIndex}_${multi} ${styleClass} ${this.getNumberColor(fieldIndex)}`)
      .on('click', () => this.throwNumber(fieldIndex, multi));
  }

  private drawArcPosition(svg: any, radius: number, x: number, y: number, styleClass: string) {
    svg
      .append('path')
      .attr('transform', 'translate(' + x + ', ' + y + ')')
      .attr('d', d3.arc()
        .innerRadius(0)
        .outerRadius(radius)
        .startAngle(0)
        .endAngle(Math.PI * 4)
      )
      .attr('class', styleClass)
      .on('click', () => this.throwZero());
  }

  private getFieldIndex(field: number): number {
    return field === 25 ? 20 : field - 1;
  }
}

