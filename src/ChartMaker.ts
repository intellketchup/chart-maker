import { Chart, ChartType, ChartData, ChartOptions, Plugin, PluginOptionsByType } from 'chart.js';


interface ChartOptionsWithPlugins extends Omit<ChartOptions<'line'>, 'plugins'> {
  plugins?: Partial<PluginOptionsByType<'line'>>;
}

// Define la interfaz que se utilizará al crear un gráfico
interface ChartOptionsWithType {
  type: 'line';
  data: ChartData<'line'>;
  options?: ChartOptionsWithPlugins;
  plugins?: Plugin<'line'>[];
}

export class ChartMaker {
  static createChart(ctx: CanvasRenderingContext2D, chartOptions: ChartOptionsWithType) {
    new Chart(ctx, {
      type: chartOptions.type,
      data: chartOptions.data,
      options: chartOptions.options,
      plugins: chartOptions.plugins || []
    });
  }
}
