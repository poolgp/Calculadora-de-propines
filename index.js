function calcula() {
  let formulari = document.getElementById("idForm");
  let numComensales = formulari.inputComensales.value;
  let totalDiners = formulari.inputTotalDiners.value;
  totalDiners = parseFloat(totalDiners);
  let opinion = formulari.selectOpinion.value;
  var percentatge = 0;
  const minPropina = 0.5;

  if (numComensales === " " || numComensales < 1 || isNaN(numComensales)) {
    numComensales = 1;
  }

  if (isNaN(totalDiners) || totalDiners < 0.01) {
    alert("Introdueix un import valit: mínim 0.01€");
    return;
  }

  if (opinion === "escull") {
    alert("Opina sobre el servei: ");
    return;
  }

  switch (opinion) {
    case "genial":
      percentatge = 0.1;
      break;
    case "acceptable":
      percentatge = 0.05;
      break;
    case "horrible":
      percentatge = 0;
      break;
  }

  let propinaTotal = totalDiners * percentatge;
  let propinaPersona = propinaTotal / numComensales;

  if (propinaPersona < minPropina) {
    alert("La propina es menor a 0.5");
    propinaPersona = 0.5;
  }

  let resultadoElement = document.getElementById("resultadoPropina");
  resultadoElement.textContent =
    "Propina total: " +
    propinaTotal.toFixed(2) +
    "€ | Propina por persona: " +
    propinaPersona.toFixed(2) +
    "€";

  formulari.reset();
}