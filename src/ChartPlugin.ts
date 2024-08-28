
import { ChartMaker } from './ChartMaker';


export interface ChartPlugin {
  // eslint-disable-next-line no-unused-vars
  apply(chart: ChartMaker): void;
}
