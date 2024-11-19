const $precio_mensual_1 = document.querySelector("#precio_mensual_1")
const $precio_mensual_2 = document.querySelector("#precio_mensual_2")
const $precio_mensual_3 = document.querySelector("#precio_mensual_3")
const $precio_mensual_vip = document.querySelector("#precio_mensual_vip")
const $precio_trimestral_1 = document.querySelector("#precio_trimestral_1")
const $precio_trimestral_2 = document.querySelector("#precio_trimestral_2")
const $precio_trimestral_3 = document.querySelector("#precio_trimestral_3")
const $precio_trimestral_vip = document.querySelector("#precio_trimestral_vip")
const $cupos_plan_vip = document.querySelector("#cupos_plan_vip")

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
  const url = "https://sheetdb.io/api/v1/jlbgbujbxmu56"
  const priceType = str === "arg" ? "arg" : "world"

  fetch(url)
    .then((response) => response.json())
    .then((data) => cargarPrecios(data, priceType))
}

// API
let prices = fetch("https://sheetdb.io/api/v1/jlbgbujbxmu56")
  .then((response) => response.json())
  .then((data) => cargarPrecios(data, "arg"))

function cargarPrecios(data, country) {
  console.log(data)
  if (country === "arg") {
    // Precios mensuales
    $precio_mensual_1.textContent = data[0].PRECIO_MENSUAL
    $precio_mensual_2.textContent = data[1].PRECIO_MENSUAL
    $precio_mensual_3.textContent = data[2].PRECIO_MENSUAL
    $precio_mensual_vip.textContent = data[3].PRECIO_MENSUAL

    // Precios trimestrales
    $precio_trimestral_1.textContent = data[0].PRECIO_TRIMESTRAL
    $precio_trimestral_2.textContent = data[1].PRECIO_TRIMESTRAL
    $precio_trimestral_3.textContent = data[2].PRECIO_TRIMESTRAL
    $precio_trimestral_vip.textContent = data[3].PRECIO_TRIMESTRAL

    // Cupos
    $cupos_plan_vip.textContent = data[3].CUPOS
  } else {
    // Precios mensuales
    $precio_mensual_1.textContent = data[0].PRECIO_MENSUAL_USD
    $precio_mensual_2.textContent = data[1].PRECIO_MENSUAL_USD
    $precio_mensual_3.textContent = data[2].PRECIO_MENSUAL_USD
    $precio_mensual_vip.textContent = data[3].PRECIO_MENSUAL_USD

    // Precios trimestrales
    $precio_trimestral_1.textContent = data[0].PRECIO_TRIMESTRAL_USD
    $precio_trimestral_2.textContent = data[1].PRECIO_TRIMESTRAL_USD
    $precio_trimestral_3.textContent = data[2].PRECIO_TRIMESTRAL_USD
    $precio_trimestral_vip.textContent = data[3].PRECIO_TRIMESTRAL_USD

    // Cupos
    $cupos_plan_vip.textContent = data[3].CUPOS
  }
}
