import { ChartData, ChartOptions, Plugin, PluginOptionsByType } from 'chart.js';
interface ChartOptionsWithPlugins extends Omit<ChartOptions<'line'>, 'plugins'> {
    plugins?: Partial<PluginOptionsByType<'line'>>;
}
interface ChartOptionsWithType {
    type: 'line';
    data: ChartData<'line'>;
    options?: ChartOptionsWithPlugins;
    plugins?: Plugin<'line'>[];
}
export declare class ChartMaker {
    static createChart(ctx: CanvasRenderingContext2D, chartOptions: ChartOptionsWithType): void;
    /**
    * Exporta el gráfico en el canvas a una imagen en formato PNG o JPEG.
    * @param canvas - El elemento canvas que contiene el gráfico.
    * @param format - El formato de la imagen. Puede ser 'image/png' o 'image/jpeg'.
    * @param quality - La calidad de la imagen para el formato JPEG (entre 0 y 1). Ignorado para PNG.
    * @returns La URL de la imagen en base64.
    */
    static exportChartToImage(canvas: HTMLCanvasElement, format: 'image/png' | 'image/jpeg', quality?: number): string;
}
export {};
