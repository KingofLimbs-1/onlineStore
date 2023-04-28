/* --- REFERENCES --- */

// ARRAYS
const productArray = [];
const cartArray = [];
// ...

/* ---/ REFERENCES /--- */

/* --- OBJECTS/CLASSES --- */
class products {
  constructor(name, price) {
    this._name = name;
    this._price = price;
  }

  getName = () => {
    return this._name;
  };

  getPrice = () => {
    return this._price;
  };
}
/* ---/ OBJECTS/CLASSES /--- */

/* --- FUNCTIONS --- */

// Living Room Population
// JSON import
fetch("/json/data.json")
  .then((response) => response.json())
  .then((data) => {
    // do something with the data here
    const livingRoomProducts = data.livingRoom;

    createProductCards(livingRoomProducts);
  })
  .catch((error) => console.error(error));

function createProductCards(livingRoomProducts) {
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

/* ---/ FUNCTIONS /--- */
