require 'json'
require 'minitest/autorun'

# Generador de Configuración de Pruebas
class TestConfigGenerator
  def self.generate_line_chart_tests
    {
      'line_chart_valid' => {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March'],
          datasets: [
            {
              label: 'Sample Line',
              data: [10, 20, 30],
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              fill: false
            }
          ]
        }
      },
      'line_chart_invalid' => {
        type: 'line',
        data: {
          labels: 'January, February, March', # Incorrect format
          datasets: [
            {
              label: 'Sample Line',
              data: '10, 20, 30', # Incorrect format
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)'
            }
          ]
        }
      }
    }
  end
end

# Clase de Pruebas para Configuraciones de Gráficos
class ChartConfigTest < Minitest::Test
  def setup
    @test_configs = TestConfigGenerator.generate_line_chart_tests
  end

  def test_valid_chart_config
    valid_config = @test_configs['line_chart_valid']
    assert_valid_chart_config(valid_config)
  end

  def test_invalid_chart_config
    invalid_config = @test_configs['line_chart_invalid']
    refute_valid_chart_config(invalid_config)
  end

  private

  def assert_valid_chart_config(config)
    assert_equal 'line', config['type']
    assert_instance_of Array, config['data']['labels']
    assert_instance_of Array, config['data']['datasets']
    assert config['data']['datasets'].first['data'].is_a?(Array)
  end

  def refute_valid_chart_config(config)
    refute_equal 'line', config['type']
    refute_instance_of Array, config['data']['labels']
    refute_instance_of Array, config['data']['datasets']
    refute config['data']['datasets'].first['data'].is_a?(Array)
  end
end

# Genera el archivo de pruebas
File.open('tests/chart_config_tests.rb', 'w') do |file|
  file.write <<-RUBY
require 'minitest/autorun'

class ChartConfigTest < Minitest::Test
  def setup
    @test_configs = #{TestConfigGenerator.generate_line_chart_tests.to_json}
  end

  def test_valid_chart_config
    valid_config = @test_configs['line_chart_valid']
    assert_valid_chart_config(valid_config)
  end

  def test_invalid_chart_config
    invalid_config = @test_configs['line_chart_invalid']
    refute_valid_chart_config(invalid_config)
  end

  private

  def assert_valid_chart_config(config)
    assert_equal 'line', config['type']
    assert_instance_of Array, config['data']['labels']
    assert_instance_of Array, config['data']['datasets']
    assert config['data']['datasets'].first['data'].is_a?(Array)
  end

  def refute_valid_chart_config(config)
    refute_equal 'line', config['type']
    refute_instance_of Array, config['data']['labels']
    refute_instance_of Array, config['data']['datasets']
    refute config['data']['datasets'].first['data'].is_a?(Array)
  end
end
  RUBY
end

puts "Test file 'chart_config_tests.rb' created successfully!"
