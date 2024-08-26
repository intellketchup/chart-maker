import { ChartOptions, ChartData, ChartType, ChartTypeRegistry } from 'chart.js';
interface ChartMakerOptions {
    type: ChartType;
    data: ChartData<keyof ChartTypeRegistry>;
    options?: ChartOptions;
}
export declare class ChartMaker {
    private type;
    private data;
    private options?;
    constructor(options: ChartMakerOptions);
    private createGradient;
    createChart(element: HTMLCanvasElement): void;
}
export {};
