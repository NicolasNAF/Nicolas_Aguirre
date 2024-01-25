// CONST
const nav = document.querySelector(".nav")
const navIcon = document.querySelector(".navIcon")
const navbar = document.querySelector(".navbar")
const navLinks = document.querySelectorAll(".nav-link")
const media = window.matchMedia("(max-width: 768px)")

const $precio_mensual_1 = document.querySelector("#precio_mensual_1")
const $precio_mensual_2 = document.querySelector("#precio_mensual_2")
const $precio_mensual_vip = document.querySelector("#precio_mensual_vip")
const $precio_trimestral_1 = document.querySelector("#precio_trimestral_1")
const $precio_trimestral_2 = document.querySelector("#precio_trimestral_2")
const $precio_trimestral_vip = document.querySelector("#precio_trimestral_vip")
const $cupos_plan_vip = document.querySelector("#cupos_plan_vip")

const $edad = document.querySelector(".edad")
// API
let prices = fetch("https://sheetdb.io/api/v1/jlbgbujbxmu56")
  .then((response) => response.json())
  .then((data) => cargarPrecios(data, "arg"))

function cargarPrecios(data, country) {
  if (country === "arg") {
    // Precios mensuales
    $precio_mensual_1.textContent = data[0].PRECIO_MENSUAL
    $precio_mensual_2.textContent = data[1].PRECIO_MENSUAL
    $precio_mensual_vip.textContent = data[2].PRECIO_MENSUAL

    // Precios trimestrales
    $precio_trimestral_1.textContent = data[0].PRECIO_TRIMESTRAL
    $precio_trimestral_2.textContent = data[1].PRECIO_TRIMESTRAL
    $precio_trimestral_vip.textContent = data[2].PRECIO_TRIMESTRAL

    // Cupos
    $cupos_plan_vip.textContent = data[2].CUPOS
  } else {
    // Precios mensuales
    $precio_mensual_1.textContent = data[0].PRECIO_MENSUAL_USD
    $precio_mensual_2.textContent = data[1].PRECIO_MENSUAL_USD
    $precio_mensual_vip.textContent = data[2].PRECIO_MENSUAL_USD

    // Precios trimestrales
    $precio_trimestral_1.textContent = data[0].PRECIO_TRIMESTRAL_USD
    $precio_trimestral_2.textContent = data[1].PRECIO_TRIMESTRAL_USD
    $precio_trimestral_vip.textContent = data[2].PRECIO_TRIMESTRAL_USD

    // Cupos
    $cupos_plan_vip.textContent = data[2].CUPOS
  }
}

// SCROLL

window.onscroll = () => scrollFunction()

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    nav.style.backgroundColor = "#31087b"
    // navbar.style.backgroundColor = "none"
    nav.style.borderBottom = "2px solid #FFC23C"
  } else {
    if (!media.matches) {
      nav.style.backgroundColor = "#100720"
      nav.style.borderBottom = "none"
    }
    navbar.classList.remove("active")
    navIcon.innerHTML = "menu"
  }
}

// Event Listeners
navIcon.addEventListener("click", handleClickMenu)

function handleClickMenu() {
  navbar.classList.toggle("active")
  if (navbar.classList.contains("active")) {
    navIcon.innerHTML = "close"
  } else {
    navIcon.innerHTML = "menu"
  }
}

// Hide Menu

window.onclick = (e) => hideMenu(e)

function hideMenu(e) {
  if (!e.target.classList.contains("nav") & !e.target.classList.contains("navIcon")) {
    navbar.classList.remove("active")
    if (navbar.classList.contains("active")) {
      navIcon.innerHTML = "close"
    } else {
      navIcon.innerHTML = "menu"
    }
  }
}

// Get year
const year = document.querySelector(".year")

function getYear() {
  let currentYear = new Date().getFullYear()
  year.innerHTML = currentYear
}

getYear()

// Select country

const $btn_argentina = document.querySelector("#argentina")
const $btn_world = document.querySelector("#world")
const $cards = document.querySelectorAll(".card")

$btn_argentina.addEventListener("click", () => {
  if (!$btn_argentina.classList.contains("active")) {
    $btn_argentina.classList.add("active")
    $btn_world.classList.remove("active")
    showPrice("arg")
  }
})

$btn_world.addEventListener("click", () => {
  if (!$btn_world.classList.contains("active")) {
    $btn_world.classList.add("active")
    $btn_argentina.classList.remove("active")
    showPrice("world")
  }
})

function showPrice(str) {
  if (str === "arg") {
    // Cambio texto
    let prices = fetch("https://sheetdb.io/api/v1/jlbgbujbxmu56")
      .then((response) => response.json())
      .then((data) => cargarPrecios(data, "arg"))
  } else {
    // Cambio texto
    let prices = fetch("https://sheetdb.io/api/v1/jlbgbujbxmu56")
      .then((response) => response.json())
      .then((data) => cargarPrecios(data, "world"))
  }
}

// MODAL
const modal = document.querySelector(".modal")
const openModalButtons = document.querySelectorAll(".btn_open_modal")
const closeModalButtons = document.querySelectorAll(".close")

// Función para abrir el modal correspondiente al botón presionado
function openModal(e) {
  const targetModalId = e.target.getAttribute("data-target")
  const targetModal = document.getElementById(targetModalId)
  targetModal.style.display = "grid"
}

// Función para cerrar todos los modales
function closeModal() {
  console.log("Se cierra")
  modal.style.display = "none"
}

// Agregar eventos a los botones
openModalButtons.forEach((btn) => {
  btn.addEventListener("click", openModal)
})

closeModalButtons.forEach((btn) => {
  btn.addEventListener("click", closeModal)
})

modal.addEventListener("mousedown", (e) => {
  if (e.target.classList.contains("modal")) {
    closeModal()
  }
})

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
