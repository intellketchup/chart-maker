import { ChartTypeRegistry } from 'chart.js';

// Usa ChartTypeRegistry para obtener el tipo de gráfico
export type ChartType = keyof ChartTypeRegistry;

// Configuraciones específicas para gráficos de barras
export type BarChartConfig = {
  barThickness?: number;
};

// Configuraciones específicas para gráficos de líneas
export type LineChartConfig = {
  tension?: number;
};

// Configuración general del gráfico
export interface ChartConfig {
  type: ChartType;
  data: any;
  options?: any;
  specificOptions?: BarChartConfig | LineChartConfig; // Configuraciones específicas
}
