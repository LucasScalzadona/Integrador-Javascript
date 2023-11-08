// Contenedor Card
const cardsContainer = document.querySelector(".cardscontainer");

// Función para crear el HTML
const cardsTemplate = (cards) => {
  return `<div class="card">
  <img src="${cards.cardImg}" alt="" />
  <div class="cardsInfo">
    <div class="cardsText">
      <h2>${cards.name}</h2>
      <p>General: ${cards.preciogeneral}</p>
    </div>
    <button>+</button>
  </div>
</div>
`;
};

// Renderizar Productos
const renderCards = (cardsList) => {
  cardsContainer.innerHTML += cardsList.map(cardsTemplate).join("");
};

// Función init
const init = () => {
  renderCards(cardsdata);
};

init();
