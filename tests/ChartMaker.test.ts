import { ChartMaker } from '../src/ChartMaker';
import Chart from 'chart.js/auto';

// Mocks para funciones y clases utilizadas en ChartMaker
jest.mock('chart.js/auto', () => ({
  // Mock de la clase Chart
  Chart: jest.fn().mockImplementation(() => ({
    update: jest.fn(),
    destroy: jest.fn(),
  })),
}));

describe('ChartMaker', () => {
  let chartMaker: ChartMaker;

  beforeEach(() => {
    chartMaker = new ChartMaker();
  });

  test('should create a Chart instance correctly', () => {
    const canvas = document.createElement('canvas');
    canvas.id = 'myChart';
    document.body.appendChild(canvas);

    chartMaker.createChart(canvas, {
      type: 'line',
      data: {
        labels: ['Enero', 'Febrero'],
        datasets: [{ data: [10, 20], label: 'Dataset' }],
      },
      options: { responsive: true },
    });

    // Verificar que Chart se ha llamado con los parámetros correctos
    expect(Chart).toHaveBeenCalledWith(canvas.getContext('2d'), {
      type: 'line',
      data: {
        labels: ['Enero', 'Febrero'],
        datasets: [{ data: [10, 20], label: 'Dataset' }],
      },
      options: { responsive: true },
    });
  });

  test('should throw an error if canvas is not provided', () => {
    expect(() => {
      chartMaker.createChart(null as any, {
        type: 'line',
        data: { labels: ['Enero'], datasets: [{ data: [10] }] },
        options: { responsive: true },
      });
    }).toThrow('Canvas is required');
  });
});
