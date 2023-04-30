/* --- REFERENCES --- */

// ARRAYS
const productArray = [];
const cartArray = [];
// ...

/* ---/ REFERENCES /--- */

/* --- OBJECTS/CLASSES --- */
/* ---/ OBJECTS/CLASSES /--- */

/* --- FUNCTIONS --- */

// LIVING ROOM POPULATION FUNCTION
// JSON import
fetch("/json/data.json")
  .then((response) => response.json())
  .then((data) => {
    // do something with the data here
    const livingRoomProducts = data.livingRoom;

    createLivingCards(livingRoomProducts);
  })
  .catch((error) => console.error(error));

function createLivingCards(livingRoomProducts) {
  // Section reference
  const livingRoom = document.querySelector(".livingRoomContainer");

  livingRoomProducts.forEach((product) => {
    // Product card div creation
    // This is the parent div for products
    const productCard = document.createElement("div");
    productCard.className = "productCard";
    // livingRoom.classList.add(productCard);

    // Container div creation
    // Text will be stored within this div
    const container = document.createElement("div");
    container.className = "container";

    // Image creation
    // This will be stored within productCard, outside of container
    const productImage = document.createElement("img");
    productImage.setAttribute("src", product.image);
    productImage.setAttribute("alt", product.image);
    productCard.appendChild(productImage);

    // Name creation
    const productName = document.createElement("h3");
    productName.textContent = product.name;
    container.appendChild(productName);

    // Price creation
    const productPrice = document.createElement("span");
    productPrice.textContent = product.price;
    container.appendChild(productPrice);

    // Product card add to product section
    livingRoom.appendChild(productCard);
    // Container add to productCard div
    productCard.appendChild(container);
  });
}
// ...

// DINING ROOM POPULATION FUNCTION
fetch("/json/data.json")
  .then((response) => response.json())
  .then((data) => {
    // do something with the data here
    const diningRoomProducts = data.diningRoom;

    createDiningCards(diningRoomProducts);
  })
  .catch((error) => console.error(error));

function createDiningCards(diningRoomProducts) {
  // Section reference
  const diningRoom = document.querySelector(".diningRoomContainer");

  diningRoomProducts.forEach((product) => {
    // Product card div creation
    // This is the parent div for products
    const productCard = document.createElement("div");
    productCard.className = "productCard";
    // livingRoom.classList.add(productCard);

    // Container div creation
    // Text will be stored within this div
    const container = document.createElement("div");
    container.className = "container";

    // Image creation
    // This will be stored within productCard, outside of container
    const productImage = document.createElement("img");
    productImage.setAttribute("src", product.image);
    productImage.setAttribute("alt", product.image);
    productCard.appendChild(productImage);

    // Name creation
    const productName = document.createElement("h3");
    productName.textContent = product.name;
    container.appendChild(productName);

    // Price creation
    const productPrice = document.createElement("span");
    productPrice.textContent = product.price;
    container.appendChild(productPrice);

    // Product card add to product section
    diningRoom.appendChild(productCard);
    // Container add to productCard div
    productCard.appendChild(container);
  });
}
// ...

// OFFICE POPULATION FUNCTION
fetch("/json/data.json")
  .then((response) => response.json())
  .then((data) => {
    // do something with the data here
    const officeProducts = data.office;

    createOfficeCards(officeProducts);
  })
  .catch((error) => console.error(error));

function createOfficeCards(officeProducts) {
  // Section reference
  const office = document.querySelector(".officeContainer");

  officeProducts.forEach((product) => {
    // Product card div creation
    // This is the parent div for products
    const productCard = document.createElement("div");
    productCard.className = "productCard";

    // Container div creation
    // Text will be stored within this div
    const container = document.createElement("div");
    container.className = "container";

    // Image creation
    // This will be stored within productCard, outside of container
    const productImage = document.createElement("img");
    productImage.setAttribute("src", product.image);
    productImage.setAttribute("alt", product.image);
    productCard.appendChild(productImage);

    // Name creation
    const productName = document.createElement("h3");
    productName.textContent = product.name;
    container.appendChild(productName);

    // Price creation
    const productPrice = document.createElement("span");
    productPrice.textContent = product.price;
    container.appendChild(productPrice);

    // Product card add to product section
    office.appendChild(productCard);
    // Container add to productCard div
    productCard.appendChild(container);
  });
}
// ...

// DECOR POPULATI0N FUNCTION
fetch("/json/data.json")
  .then((response) => response.json())
  .then((data) => {
    // do something with the data here
    const decorProducts = data.decor;

    createDecorCards(decorProducts);
  })
  .catch((error) => console.error(error));

  function createDecorCards(decorProducts){
    // Section reference
  const decor = document.querySelector(".decorContainer");

  decorProducts.forEach((product) => {
    // Product card div creation
    // This is the parent div for products
    const productCard = document.createElement("div");
    productCard.className = "productCard";

    // Container div creation
    // Text will be stored within this div
    const container = document.createElement("div");
    container.className = "container";

    // Image creation
    // This will be stored within productCard, outside of container
    const productImage = document.createElement("img");
    productImage.setAttribute("src", product.image);
    productImage.setAttribute("alt", product.image);
    productCard.appendChild(productImage);

    // Name creation
    const productName = document.createElement("h3");
    productName.textContent = product.name;
    container.appendChild(productName);

    // Price creation
    const productPrice = document.createElement("span");
    productPrice.textContent = product.price;
    container.appendChild(productPrice);

    // Product card add to product section
    decor.appendChild(productCard);
    // Container add to productCard div
    productCard.appendChild(container);
  });
  }
// ...
/* ---/ FUNCTIONS /--- */
