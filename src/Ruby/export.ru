require 'mini_magick'
require 'base64'

# Función para guardar una imagen a partir de datos en base64
def save_image_from_base64(base64_data, file_path)
  # Separar el encabezado de los datos de la imagen
  data = base64_data.sub(/^data:image\/[a-z]+;base64,/, '')
  binary_data = Base64.decode64(data)

  # Crear una imagen con MiniMagick
  image = MiniMagick::Image.read(binary_data)

  # Guardar la imagen en el sistema de archivos
  image.write(file_path)
end

# Ejemplo de uso
base64_png = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...'
file_path = 'chart.png'
save_image_from_base64(base64_png, file_path)
