/* --- REFERENCES --- */

// Product modal container
const modalContainer = document.querySelector(".modalContainer");

// Product modal header
const modalHeader = document.querySelector(".modalHeader");

// Product modal body
const modalBody = document.querySelector(".modalBody");

// Product modal footer
const modalFooter = document.querySelector(".modalFooter");

// Cart array
const cartArray = [];

// Cart button
const cartBtn = document.querySelector(".cart");

// Cart modal container
const cartModalContainer = document.querySelector(".cartModalContainer");

// Cart modal content
const cartModalContent = document.querySelector(".cartModalContent");

/* ---/ REFERENCES /--- */

/* --- FUNCTIONS --- */

// Create product cards function

fetch("/json/data.json")
  .then((response) => response.json())
  .then((data) => {
    // Product section function calls with "selector" and "data" arguments
    const livingRoomCards = createProductCards(
      ".livingRoomContainer",
      data.livingRoom
    );
    const diningRoomCards = createProductCards(
      ".diningRoomContainer",
      data.diningRoom
    );
    const officeCards = createProductCards(".officeContainer", data.office);
    const decorCards = createProductCards(".decorContainer", data.decor);

    // Returned function calls for each section
    livingRoomCards();
    diningRoomCards();
    officeCards();
    decorCards();
  })
  .catch((error) => console.error(error));

// createProductCards function
function createProductCards(selector, data) {
  // Product section value assignment
  const section = document.querySelector(selector);

  // Product card creation
  data.forEach((product) => {
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
    section.appendChild(productCard);
    // Container add to productCard div
    productCard.appendChild(container);
    // ...

    // Product modal creation
    productCard.addEventListener("click", function () {
      //   Display logic
      if (
        modalContainer.style.display === "none" ||
        modalContainer.style.display === ""
      ) {
        modalContainer.style.display = "block";
      }

      // Product modal header element creation

      // Modal section reset
      modalHeader.innerHTML = "";
      // Heading creation
      const heading = document.createElement("h2");
      // Heading value assignment
      heading.textContent = product.name;
      modalHeader.appendChild(heading);
      // Description creation
      const description = document.createElement("p");
      description.textContent = product.description;
      description.className = "description";
      modalHeader.appendChild(description);
      // Rating creation
      const rating = document.createElement("img");
      rating.src = product.rating;
      rating.className = "rating";
      const ratingContainer = document.createElement("div");
      ratingContainer.className = "ratingContainer";
      ratingContainer.appendChild(rating);
      modalHeader.appendChild(ratingContainer);
      // Close button creation
      const closeBtn = document.createElement("button");
      closeBtn.className = "closeBtn";
      closeBtn.innerHTML = '<img src="/images/shopPage/close.png"/>';
      heading.appendChild(closeBtn);
      // Close button event listener that closes modal once button is clicked
      closeBtn.addEventListener("click", function () {
        closeModal();
      });

      // Product modal body element creation

      //   Modal section reset
      modalBody.innerHTML = "";
      // Image creation
      product.images.forEach((image) => {
        const productImg = document.createElement("img");
        productImg.setAttribute("src", image);
        productImg.setAttribute("alt", image);
        productImg.className = "modalImage";
        modalBody.appendChild(productImg);
      });

      // Product modal footer element creation

      modalFooter.innerHTML = "";
      // Add to cart button creation
      const addBtn = document.createElement("button");
      addBtn.textContent = "Add to Cart";
      addBtn.className = "addBtn";
      modalFooter.appendChild(addBtn);
      // addToCart function call event
      addBtn.addEventListener("click", function () {
        addToCart(product);
      });
      // ...
    });
  });
}
// ...

// Close modal function
function closeModal() {
  if (modalContainer.style.display === "block") {
    modalContainer.style.display = "none";
  }
}
// ...

// Add to cart function
function addToCart(product) {
  // Check to see if the product is already in the cart
  const index = cartArray.findIndex((item) => item.name === product.name);
  if (index !== -1) {
    // If the product is already in the cart, increase its number of units
    alert("That product is already in your cart!");
  } else {
    cartArray.push({
      // New object attribute creation for quantity incrementation
      ...product,
      numberOfUnits: 1,
    });
  }
  updateCart();
}
// ...

// Update cart function
function updateCart() {
  // Create cart items function call
  createCartItems();
}
// ...

// Create cart items function
function createCartItems() {
  cartModalContent.innerHTML = "";
  cartArray.forEach((product) => {
    cartModalContent.innerHTML += `
    <div class="cartModalBody">
      <div class="imageContainer">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="nameContainer">
        <h1>${product.name}</h1>
      </div>
      <div class="priceContainer">
        <span>${product.price}</span>
      </div>
    </div>
    <div class="cartModalFooter">
      <div class="minusBtn">
      <img src="/images/shopPage/minusBtn.png" alt="">
      </div>
      <div class="units">${product.numberOfUnits}</div>
      <div class="plusBtn">
      <img src="/images/shopPage/plusBtn.png" alt="">
      </div>
    </div>
    `;
  });
}
// ...

// Show cart
function showCart() {
  if (
    cartModalContainer.style.display === "none" ||
    cartModalContainer.style.display === ""
  ) {
    cartModalContainer.style.display = "block";
  }
}
// ...

/* ---/ FUNCTIONS /--- */

/* --- EVENT LISTENERS --- */

// Cart button event
cartBtn.addEventListener("click", function () {
  showCart();
});
// ...
/* ---/ EVENT LISTENERS /--- */
