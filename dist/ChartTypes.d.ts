import { ChartTypeRegistry } from 'chart.js';
export type ChartType = keyof ChartTypeRegistry;
export type BarChartConfig = {
    barThickness?: number;
};
export type LineChartConfig = {
    tension?: number;
};
export interface ChartConfig {
    type: ChartType;
    data: any;
    options?: any;
    specificOptions?: BarChartConfig | LineChartConfig;
}
