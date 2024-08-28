// eslint-disable-next-line no-unused-vars
import { Chart, ChartType, ChartData, ChartOptions, Plugin, CoreChartOptions, ElementChartOptions, PluginChartOptions, DatasetChartOptions, ScaleChartOptions, DefaultDataPoint } from 'chart.js';

// Definir las opciones del gráfico con soporte para plugins personalizados
interface ChartOptionsWithPlugins {
  legend?: {
    display?: boolean; // Muestra u oculta la leyenda
    position?: 'top' | 'left' | 'bottom' | 'right'; // Posición de la leyenda
    align?: 'start' | 'center' | 'end'; // Alineación de la leyenda
    labels?: {
      color?: string; // Color del texto de las etiquetas
      font?: {
        size?: number; // Tamaño de fuente de las etiquetas
      };
    };
  };
  [key: string]: any; // Permite otros plugins de Chart.js
}

// Interfaz genérica para opciones de gráficos que soportan diferentes tipos de gráficos
interface ChartOptionsWithType<T extends ChartType> {
  type: T;
  data: ChartData<T>;
  options?: ChartOptions<T> & ChartOptionsWithPlugins; // Combina opciones de Chart.js con las nuestras
  plugins?: Plugin<T>[];
}

export class ChartMaker {
  // Método genérico para crear gráficos de diferentes tipos
  static createChart<T extends ChartType>(
    ctx: CanvasRenderingContext2D,
    chartOptions: ChartOptionsWithType<T>
  ) {
    new Chart<T>(ctx, {
      type: chartOptions.type,
      data: chartOptions.data,
      options: chartOptions.options, // Esto debería ser compatible ahora
      plugins: chartOptions.plugins || []
    });
  }

  /**
   * Exporta el gráfico en el canvas a una imagen en formato PNG, JPEG, SVG o PDF.
   * @param canvas - El elemento canvas que contiene el gráfico.
   * @param format - El formato de la imagen.
   * @param quality - La calidad de la imagen para el formato JPEG (entre 0 y 1).
   * @returns La URL de la imagen en base64.
   */
  static exportChartToImage(
    canvas: HTMLCanvasElement,
    format: 'image/png' | 'image/jpeg' | 'image/svg' | 'pdf',
    quality: number = 1.0
  ): string {
    if (!['image/png', 'image/jpeg', 'image/svg', 'pdf'].includes(format)) {
      throw new Error('Formato no soportado. Use "image/png", "image/jpeg", "image/svg" o "pdf".');
    }

    if (format === 'image/jpeg' && (quality < 0 || quality > 1)) {
      throw new Error('La calidad debe estar entre 0 y 1.');
    }

    // Convertir el canvas a una imagen en base64
    return canvas.toDataURL(format, quality);
  }
}
