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

   /**
   * Exporta el gráfico en el canvas a una imagen en formato PNG o JPEG.
   * @param canvas - El elemento canvas que contiene el gráfico.
   * @param format - El formato de la imagen. Puede ser 'image/png' o 'image/jpeg'.
   * @param quality - La calidad de la imagen para el formato JPEG (entre 0 y 1). Ignorado para PNG.
   * @returns La URL de la imagen en base64.
   */
   static exportChartToImage(canvas: HTMLCanvasElement, format: 'image/png' | 'image/jpeg' | 'image/svg' | 'pdf', quality: number = 1.0): string {
    if (format !== 'image/png' && format !== 'image/jpeg' && format !== 'image/svg' && format !== 'pdf') {
      throw new Error('Formato no soportado. Use "image/png" o "image/jpeg".');
    }
    

    if (format === 'image/jpeg' && (quality < 0 || quality > 1)) {
      throw new Error('La calidad debe estar entre 0 y 1.');
    }

    // Convertir el canvas a una imagen en base64
    return canvas.toDataURL(format, quality);
  }
}
