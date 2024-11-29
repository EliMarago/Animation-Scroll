const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

function checkBoxes() {
  const scroll = window.innerHeight * 0.3; // Definisce il punto di innesco (80% dell'altezza del viewport)

  boxes.forEach((box) => {
    const scrollTop = box.getBoundingClientRect().top; // Ottiene la distanza tra la parte superiore del box e il viewport //Restituisce un oggetto con le dimensioni e la posizione dell'elemento rispetto al viewport.

    if (scrollTop < scroll) {
      // Verifica se la parte superiore del box è sopra il punto di innesco
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

// //Quando l'utente scorre la pagina:
// Il browser attiva l'evento di scroll.
// La funzione anonima all'interno di addEventListener viene eseguita.
// La funzione calcola il triggerBottom, basato sull'altezza del viewport.
// Per ogni box:
// Si ottiene la posizione corrente rispetto al viewport usando getBoundingClientRect().top.
// Si confronta questa posizione con triggerBottom.
// Se il box è visibile (cioè sopra il triggerBottom), viene aggiunta la classe show.
// Altrimenti, la classe show viene rimossa.
