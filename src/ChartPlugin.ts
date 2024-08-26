import { ChartMaker } from './ChartMaker'; // Cambia a importación nombrada


export interface ChartPlugin {
  apply(chart: ChartMaker): void;
}
