const $edad = document.querySelector(".edad")

// CALCULAR EDAD
function calcularEdad(fechaNacimiento) {
  // Convierte la cadena de fecha de nacimiento en un objeto de fecha
  const fechaNac = new Date(fechaNacimiento)
  // Obtiene la fecha actual
  const fechaActual = new Date()
  // Calcula la diferencia en milisegundos entre la fecha actual y la de nacimiento
  const diferencia = fechaActual - fechaNac
  // Convierte la diferencia de milisegundos a años
  const edad = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25))
  return edad
}

// Ejemplo de uso
const fechaNacimiento = "1998-08-10" // Debes proporcionar la fecha en formato YYYY-MM-DD
const edadCalculada = calcularEdad(fechaNacimiento)

$edad.textContent = edadCalculada
