function cambiarMoneda() {
  const moneda = document.getElementById("moneda").value;

  const tiposCambio = {
    usd: 1,       // base
    bs: 7,        // 1 USD = 7 Bs
    mx: 17.50,    // 1 USD = 0.92 EUR (ejemplo)
    eur: 0.92
  };

  const simbolos = {
    usd: 'US$',
    bs: 'Bs',
    mx: 'Mx',
    eur: 'Eur'
  };

  const precios = document.querySelectorAll(".card-title");

  precios.forEach((el) => {
    const precioUSD = parseFloat(el.getAttribute("data-usd"));
    const convertido = (precioUSD * tiposCambio[moneda]).toFixed(2);
    el.innerHTML = `${simbolos[moneda]} <span class="precio">${convertido}</span>`;
  });
}
