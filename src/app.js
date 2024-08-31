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


