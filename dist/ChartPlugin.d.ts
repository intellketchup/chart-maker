import { ChartMaker } from './ChartMaker';
export interface ChartPlugin {
    apply(chart: ChartMaker): void;
}
