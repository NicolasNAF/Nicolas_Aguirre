const $precio_calc_volumen = document.querySelector("#precio_calc_volumen")
const $precio_calc_definicion = document.querySelector("#precio_calc_definicion")
const $precio_calc_ambas = document.querySelector("#precio_calc_ambas")

// API
let prices = fetch("https://sheetdb.io/api/v1/jlbgbujbxmu56?sheet=Hoja2")
  .then((response) => response.json())
  .then((data) => cargarPrecios(data, "arg"))

function cargarPrecios(data, country) {
  if (country === "arg") {
    $precio_calc_volumen.textContent = data[0].PRECIO_CALC
    $precio_calc_definicion.textContent = data[1].PRECIO_CALC
    $precio_calc_ambas.textContent = data[2].PRECIO_CALC
  } else {
    $precio_calc_volumen.textContent = data[0].PRECIO_CALC_USD
    $precio_calc_definicion.textContent = data[1].PRECIO_CALC_USD
    $precio_calc_ambas.textContent = data[2].PRECIO_CALC_USD
  }
}

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
  const url = "https://sheetdb.io/api/v1/jlbgbujbxmu56?sheet=Hoja2"
  const priceType = str === "arg" ? "arg" : "world"

  console.log(url, priceType)

  fetch(url)
    .then((response) => response.json())
    .then((data) => cargarPrecios(data, priceType))
}
