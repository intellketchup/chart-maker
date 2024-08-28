import { Chart } from 'chart.js';

export class HorizontalLinePlugin {
    static id = 'horizontalLinePlugin';

    // Opciones del plugin
    static defaults = {
        color: 'rgba(0,0,0,0.5)',
        lineWidth: 1,
        yValue: 0,
    };

    // Método para aplicar el plugin
    static beforeDraw(chart: Chart, _args: any, options: any) {
        const { ctx, chartArea } = chart;
        const { color, lineWidth, yValue } = options;
        
        // Dibuja una línea horizontal en el gráfico
        ctx.save();
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.beginPath();
        const y = chart.scales.y.getPixelForValue(yValue);
        ctx.moveTo(chartArea.left, y);
        ctx.lineTo(chartArea.right, y);
        ctx.stroke();
        ctx.restore();
    }
}
