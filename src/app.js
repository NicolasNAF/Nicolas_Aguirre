// CONST
const nav = document.querySelector(".nav")
const navIcon = document.querySelector(".navIcon")
const navbar = document.querySelector(".navbar")
const navLinks = document.querySelectorAll(".nav-link")
const media = window.matchMedia("(max-width: 768px)")

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

const $precio_mensual_1 = document.querySelector("#precio_mensual_1")
const $precio_mensual_2 = document.querySelector("#precio_mensual_2")
const $precio_mensual_3 = document.querySelector("#precio_mensual_3")
const $precio_trimestral_1 = document.querySelector("#precio_trimestral_1")
const $precio_trimestral_2 = document.querySelector("#precio_trimestral_2")
const $precio_trimestral_3 = document.querySelector("#precio_trimestral_3")

function showPrice(str) {
  if (str === "arg") {
    // Cambio texto
    $precio_mensual_1.textContent = "$3800 Mensual"
    $precio_mensual_2.textContent = "$4500 Mensual"
    $precio_mensual_3.textContent = "$6000 Mensual"
    $precio_trimestral_1.textContent = "$10000 Trimestral"
    $precio_trimestral_2.textContent = "$12000 Trimestral"
    $precio_trimestral_3.textContent = "$17000 Trimestral"
  } else {
    // Cambio texto
    $precio_mensual_1.textContent = "$10 Mensual"
    $precio_mensual_2.textContent = "$15 Mensual"
    $precio_mensual_3.textContent = "$20 Mensual"
    $precio_trimestral_1.textContent = "$25 Trimestral"
    $precio_trimestral_2.textContent = "$40 Trimestral"
    $precio_trimestral_3.textContent = "$50 Trimestral"
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
