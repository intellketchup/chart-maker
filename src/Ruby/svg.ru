require 'nokogiri'

class SvgExporter
  def initialize(svg_content)
    @svg_content = svg_content
  end

  def save_to_file(file_name)
    File.write(file_name, @svg_content)
  end
end

# Usa la función para guardar un SVG generado
svg_content = '<svg>...</svg>' # Generado de alguna manera
exporter = SvgExporter.new(svg_content)
exporter.save_to_file('chart.svg')
