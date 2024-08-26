import { Chart } from 'chart.js';
export declare class HorizontalLinePlugin {
    static id: string;
    static defaults: {
        color: string;
        lineWidth: number;
        yValue: number;
    };
    static beforeDraw(chart: Chart, _args: any, options: any): void;
}
