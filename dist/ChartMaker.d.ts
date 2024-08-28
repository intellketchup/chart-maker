import { ChartType, ChartData, ChartOptions, Plugin } from 'chart.js';
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
    [key: string]: any;
}
interface ChartOptionsWithType<T extends ChartType> {
    type: T;
    data: ChartData<T>;
    options?: ChartOptions<T> & ChartOptionsWithPlugins;
    plugins?: Plugin<T>[];
}
export declare class ChartMaker {
    static createChart<T extends ChartType>(ctx: CanvasRenderingContext2D, chartOptions: ChartOptionsWithType<T>): void;
    /**
     * Exporta el gráfico en el canvas a una imagen en formato PNG, JPEG, SVG o PDF.
     * @param canvas - El elemento canvas que contiene el gráfico.
     * @param format - El formato de la imagen.
     * @param quality - La calidad de la imagen para el formato JPEG (entre 0 y 1).
     * @returns La URL de la imagen en base64.
     */
    static exportChartToImage(canvas: HTMLCanvasElement, format: 'image/png' | 'image/jpeg' | 'image/svg' | 'pdf', quality?: number): string;
}
export {};
