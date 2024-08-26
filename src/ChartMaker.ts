import { Chart, ChartOptions, ChartData, ChartType, ChartTypeRegistry, ChartConfiguration } from 'chart.js';

interface ChartMakerOptions {
    type: ChartType; // Asegúrate de que el tipo está correctamente importado
    data: ChartData<keyof ChartTypeRegistry>;
    options?: ChartOptions;
}

export class ChartMaker {
    private type: ChartType;
    private data: ChartData<keyof ChartTypeRegistry>;
    private options?: ChartOptions;

    constructor(options: ChartMakerOptions) {
        this.type = options.type;
        this.data = options.data;
        this.options = options.options;
    }

    private createGradient(ctx: CanvasRenderingContext2D, colors: string[]): CanvasGradient {
        const gradient = ctx.createLinearGradient(0, 0, 0, 400); // Cambia los valores según el tamaño del gráfico
        const colorStopInterval = 1 / (colors.length - 1);
        colors.forEach((color, index) => {
            gradient.addColorStop(index * colorStopInterval, color);
        });
        return gradient;
    }

    public createChart(element: HTMLCanvasElement): void {
        const ctx = element.getContext('2d');
        if (!ctx) throw new Error('Failed to get canvas context');

        const chartConfig: ChartConfiguration = {
            type: this.type,
            data: this.data,
            options: this.options,
        };

        // Aplicar gradientes a los datasets si es necesario
        this.data.datasets?.forEach((dataset: any) => {
            if (dataset.backgroundColor && Array.isArray(dataset.backgroundColor)) {
                dataset.backgroundColor = this.createGradient(ctx, dataset.backgroundColor);
            }
            if (dataset.borderColor && Array.isArray(dataset.borderColor)) {
                dataset.borderColor = this.createGradient(ctx, dataset.borderColor);
            }
        });

        new Chart(ctx, chartConfig);
    }
}
