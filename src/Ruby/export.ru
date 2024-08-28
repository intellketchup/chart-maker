require 'mini_magick'
require 'base64'

# Función para guardar una imagen a partir de datos en base64
# @param [String] base64_data Datos de la imagen en formato base64
# @param [String] file_path Ruta del archivo donde se guardará la imagen
def save_image_from_base64(base64_data, file_path)
  begin
    # Separar el encabezado de los datos de la imagen
    data = base64_data.sub(/^data:image\/[a-z]+;base64,/, '')
    
    # Decodificar los datos base64 a binario
    binary_data = Base64.decode64(data)
    
    # Crear una imagen con MiniMagick a partir de los datos binarios
    image = MiniMagick::Image.read(binary_data)
    
    # Guardar la imagen en el sistema de archivos
    image.write(file_path)

    puts "Imagen guardada exitosamente en: #{file_path}"
  rescue => e
    # Manejo de errores en caso de que algo falle
    puts "Error al guardar la imagen: #{e.message}"
  end
end

# Ejemplo de uso
base64_png = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...'
file_path = 'chart.png'
save_image_from_base64(base64_png, file_path)
