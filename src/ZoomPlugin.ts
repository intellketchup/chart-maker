// src/ZoomPlugin.ts

import { Chart, Plugin } from 'chart.js';
import Hammer from 'hammerjs';

// Definir el plugin de zoom para gráficos de línea
export const ZoomPlugin: Plugin<'line'> = {
  id: 'zoomPlugin',

  beforeInit(chart: Chart<'line'>) {
    const hammer = new Hammer(chart.canvas);

    hammer.get('pinch').set({ enable: true });
    hammer.get('pan').set({ direction: Hammer.DIRECTION_ALL });

    hammer.on('pinch', (event) => {
      const { scale } = event;
      const xScale = chart.scales['x'];
      const yScale = chart.scales['y'];

      if (xScale && yScale) {
        xScale.options.min = (xScale.options.min as number) * scale;
        xScale.options.max = (xScale.options.max as number) * scale;
        yScale.options.min = (yScale.options.min as number) * scale;
        yScale.options.max = (yScale.options.max as number) * scale;
        chart.update();
      }
    });

    hammer.on('pan', (event) => {
      const { deltaX, deltaY } = event;
      const xScale = chart.scales['x'];
      const yScale = chart.scales['y'];

      if (xScale && yScale) {
        xScale.options.min = (xScale.options.min as number) - deltaX;
        xScale.options.max = (xScale.options.max as number) - deltaX;
        yScale.options.min = (yScale.options.min as number) + deltaY;
        yScale.options.max = (yScale.options.max as number) + deltaY;
        chart.update();
      }
    });
  }
};
