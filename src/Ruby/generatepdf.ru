require 'prawn'

Prawn::Document.generate("chart.pdf") do
  text "Graph Chart"
  # Puedes agregar gráficos generados a partir de imágenes aquí.
end
