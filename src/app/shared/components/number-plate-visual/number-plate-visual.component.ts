import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {GameService} from '~services/game.service';
import {Playground} from '~models/playground.model';
import {ApplicationStateService} from '~services/application-state.service';
import * as d3 from 'd3';

const ARC_WIDTH = 0.295;

@Component({
  selector: 'app-number-plate-visual',
  templateUrl: './number-plate-visual.component.html',
  styleUrls: ['./number-plate-visual.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NumberPlateVisualComponent implements OnInit {

  @Input() playground: any;

  numbers = [20, 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5];

  constructor(public game: GameService,
              public application: ApplicationStateService) {
  }

  ngOnInit() {
    this.refresh();
  }

  next() {
    this.playground.skip();
    this.refresh();
  }

  refresh() {
    d3.select('#darts-table-plate svg').remove();
    const svg = d3.select('#darts-table-plate').append('svg').attr('width', '100%')
      .attr('height', '100%').attr('viewBox', '0 0 330 330');
    const numbers = [20, 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5];

    this.drawArc(svg, 0, 165, 0, Math.PI * 4, 'field-inactive', 0, 1);
    this.drawArc(svg, 0, 14, 0, Math.PI * 4, 'field-color-m', 25, 1);
    this.drawArc(svg, 15, 29, 0, Math.PI * 4, 'field-color', 25, 1);
    for (let i = 0; i < numbers.length; i++) {
      const colorSlice = 'field-color';
      const colorSliceMulti = 'field-color-m';
      const startAngle = i * Math.PI / 10 - ARC_WIDTH / 2;
      const endAngle = startAngle + ARC_WIDTH;
      this.drawArc(svg, 30, 74, startAngle, endAngle, colorSlice, numbers[i], 1);
      this.drawArc(svg, 75, 89, startAngle, endAngle, colorSliceMulti, numbers[i], 3);
      this.drawArc(svg, 90, 129, startAngle, endAngle, colorSlice, numbers[i], 1);
      this.drawArc(svg, 130, 144, startAngle, endAngle, colorSliceMulti, numbers[i], 2);
      this.drawText(svg, numbers[i], i * 18 - 2, 165, 3, numbers[i], 1);
    }
    this.drawText(svg, 25, 0, 158.5, 137, 25, 1);
    this.drawText(svg, 50, 0, 158.5, 158.5, 25, 2);
  }

  private getNumberColor(fieldIndex: number): string {
    if (this.playground.isPrimaryField(fieldIndex)) {
      return 'primary';
    } else if (this.playground.isSecondaryField(fieldIndex)) {
      return 'accent';
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
    this.refresh();
  }

  private drawText(svg, text: number, rotate: number, x: number, y: number, field: number, multi: number) {
    const fieldIndex = field === 25 ? 20 : field - 1;
    svg.append('text')
      .attr('x', x)
      .attr('y', y)
      .attr('dy', '1em')
      .attr('transform', 'rotate(' + rotate + ', 165, 165)')
      .attr('class', 'number-text' + ' ' + this.getNumberColor(fieldIndex))
      .text(text)
      .on('click', () => this.throwNumber(fieldIndex, multi));
  }

  private drawArc(svg: any, innerRadius: number, outerRadius: number, startAngle: number, endAngle: number,
                  styleClass: string, field: number, multi: number) {
    const fieldIndex = field === 25 ? 20 : field - 1;
    svg
      .append('path')
      .attr('transform', 'translate(165, 165)')
      .attr('d', d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius)
        .startAngle(startAngle)
        .endAngle(endAngle)
      )
      .attr('class', styleClass + ' ' + this.getNumberColor(fieldIndex))
      .on('click', () => this.throwNumber(fieldIndex, multi));
  }
}

