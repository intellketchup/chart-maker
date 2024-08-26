interface ChartData {
    label: string;
    value: number;
}
interface ChartOptions {
    title?: string;
    colors?: string[];
    xAxis?: string;
    yAxis?: string;
    borderColor?: string;
    borderWidth?: number;
}
interface ChartConfig {
    data: ChartData[];
    options?: ChartOptions;
}
export default class ChartMaker {
    private config;
    private chart;
    constructor(config: ChartConfig);
    createChart(element: HTMLCanvasElement): void;
    updateData(newData: ChartData[]): void;
}
export {};
