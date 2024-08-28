// eslint-disable-next-line no-unused-vars
import {
  Chart,
  ChartType,
  ChartData,
  ChartOptions,
  Plugin,
  InteractionItem
} from 'chart.js';

// Extender las opciones del gráfico con soporte para animaciones, plugins personalizados e interactividad
interface ChartOptionsWithPlugins {
  legend?: {
    display?: boolean;
    position?: 'top' | 'left' | 'bottom' | 'right';
    align?: 'start' | 'center' | 'end';
    labels?: {
      color?: string;
      font?: {
        size?: number;
      };
    };
  };
  animation?: {
    duration?: number;
    easing?: 'linear' | 'easeInOutQuad' | 'easeOutBounce' | 'easeInBounce' | 'easeOutQuart' | 'easeInQuart' | 'easeOutElastic';
    onProgress?: (animation: any) => void;
    onComplete?: (animation: any) => void;
  };
  onClick?: (event: MouseEvent, activeElements: InteractionItem[], chart: Chart) => void; // Nuevo: Evento de clic personalizado
  hover?: {
    mode?: 'nearest' | 'index' | 'dataset' | 'point'; // Nuevo: Opciones de interacción al pasar el ratón
    animationDuration?: number;
    onHover?: (event: MouseEvent, activeElements: InteractionItem[], chart: Chart) => void; // Nuevo: Evento de hover personalizado
  };
  [key: string]: any;
}

// Interfaz genérica para opciones de gráficos que soportan diferentes tipos de gráficos
interface ChartOptionsWithType<T extends ChartType> {
  type: T;
  data: ChartData<T>;
  options?: ChartOptions<T> & ChartOptionsWithPlugins;
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
      options: chartOptions.options,
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

    return canvas.toDataURL(format, quality);
  }
}
