import Chart from 'chart.js/auto';

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
  private config: ChartConfig;
  private chart: Chart | null = null;

  constructor(config: ChartConfig) {
    this.config = config;
  }

  public createChart(element: HTMLCanvasElement): void {
    if (element instanceof HTMLCanvasElement) {
      const ctx = element.getContext('2d');
      if (!ctx) {
        console.error('Failed to get canvas context');
        return;
      }

      this.chart = new Chart(ctx, {
        type: 'bar', // Puedes hacer esto dinámico según la configuración
        data: {
          labels: this.config.data.map(d => d.label),
          datasets: [{
            label: this.config.options?.title || '',
            data: this.config.data.map(d => d.value),
            backgroundColor: this.config.options?.colors || '#42A5F5',
            borderColor: this.config.options?.borderColor || '#1E88E5',
            borderWidth: this.config.options?.borderWidth || 1
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true
            },
            tooltip: {
              callbacks: {
                label: (context) => `${context.label}: ${context.raw}`
              }
            }
          },
          scales: {
            x: {
              title: {
                display: true,
                text: this.config.options?.xAxis || 'X Axis'
              }
            },
            y: {
              title: {
                display: true,
                text: this.config.options?.yAxis || 'Y Axis'
              }
            }
          }
        }
      });
    } else {
      console.error('The provided element is not a valid canvas element');
    }
  }

  public updateData(newData: ChartData[]): void {
    if (this.chart) {
      this.chart.data.labels = newData.map(d => d.label);
      this.chart.data.datasets[0].data = newData.map(d => d.value);
      this.chart.update();
    }
  }
}
