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
}
export {};
