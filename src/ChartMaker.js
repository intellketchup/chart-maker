import { Chart, BarElement, CategoryScale, LinearScale } from 'chart.js';

Chart.register(BarElement, CategoryScale, LinearScale);

class ChartMaker {
  constructor(config) {
    this.config = config;
    this.chart = null;
  }

  createChart(element) {
    const ctx = element.getContext('2d');

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.config.data.map(d => d.label),
        datasets: [{
          label: this.config.options.title || '',
          data: this.config.data.map(d => d.value),
          backgroundColor: this.config.options.colors || '#42A5F5',
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
              text: this.config.options.xAxis || 'X Axis'
            }
          },
          y: {
            title: {
              display: true,
              text: this.config.options.yAxis || 'Y Axis'
            }
          }
        }
      }
    });
  }

  updateData(newData) {
    if (this.chart) {
      this.chart.data.labels = newData.map(d => d.label);
      this.chart.data.datasets[0].data = newData.map(d => d.value);
      this.chart.update();
    }
  }
}

export default ChartMaker;
