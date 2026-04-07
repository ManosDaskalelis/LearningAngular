import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp',
  standalone: true,
})
export class TemperaturePipe implements PipeTransform {
  // tranform() {
  // }

  transform(
    value: string | number | null,
    inputT: 'cel' | 'far',
    outT?: 'cel' | 'far',
  ) {

    if(!value) {
        return value;
    }

    let val: number;

    if (typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }

    let outputTemp: number;
    if (inputT === 'cel' && outT === 'far') {
      outputTemp = val * (9 / 5) + 32;
    } else if (inputT == 'far' && outT == 'cel') {
      outputTemp = (val - 32) * (5 / 9);
    } else {
      outputTemp = val;
    }

    let symbol: '°C' | '°F';

    if (!outT) {
      symbol = inputT === 'cel' ? '°C' : '°F';
    } else {
      symbol = outT === 'cel' ? '°C' : '°F';
    }

    return `${outputTemp.toFixed(2)} ${symbol}`;
  }
}
