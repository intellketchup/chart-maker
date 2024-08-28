require 'json'
require 'minitest/autorun'

class ChartConfigTest < Minitest::Test
  def setup
    @valid_json = generator.generate_config
  end

  def test_valid_json
    config = JSON.parse(@valid_json)
    assert_includes ['line', 'bar', 'pie'], config['type']
    assert_includes config['data'].keys, 'labels'
    assert_includes config['data'].keys, 'datasets'
  end
end
