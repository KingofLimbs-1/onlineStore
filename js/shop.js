/* --- REFERENCES --- */

// Navbar
const navBar = document.querySelector(".rowContainer");

// Product modal container
const modalContainer = document.querySelector(".modalContainer");

// Product modal header
const modalHeader = document.querySelector(".modalHeader");

// Product modal body
const modalBody = document.querySelector(".modalBody");

// Product modal footer
const modalFooter = document.querySelector(".modalFooter");

// Cart array
let cartArray = [];

// Cart button
const cartBtn = document.querySelector(".cart");

// Cart item count
const cartQuantity = document.querySelector(".quantity");

// Cart modal container
const cartModalContainer = document.querySelector(".cartModalContainer");

// Cart modal content
const cartModalContent = document.querySelector(".cartModalContent");

// Cart subtotal
const cartSubTotal = document.querySelector(".subTotal span");

// Cart modal close button
const cartModalClose = document.querySelector(".cartModalClose");

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

// Close product modal function
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
    cartArray.push(product);
  }
  updateCart();
  saveCartToLocalStorage();
}
// ...

// Update cart function
function updateCart() {
  // Create cart items function call
  createCartItems();
  // Subtotal function call
  createSubTotal();
  // Update quantity function call
  updateCartQuantity();
}
// ...

// Create cart items function
function createCartItems() {
  cartModalContent.innerHTML = "";
  cartArray.forEach((product) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cartModalItem");
    cartItem.innerHTML += `
            <img src="${product.image}" alt="${product.name}" />
            <div class="infoContainer">
              <h1>${product.name}</h1>
              <span>${product.price}</span>
            </div>
            <div class="removeItemBtn">
              <button data-product-id="${product.id}">
                <img src="/images/shopPage/removeItemBtn.png" alt="">
              </button>
            </div>
    `;
    cartModalContent.appendChild(cartItem);
    // Remove item from cart button event listener
    const removeItemBtn = cartItem.querySelector(".removeItemBtn button");
    removeItemBtn.addEventListener("click", function () {
      removeFromCart(product.id);
    });
  });
}
// ...

// Remove item from cart function
function removeFromCart(productId) {
  const index = cartArray.findIndex((product) => product.id === productId);
  if (index !== -1) {
    cartArray.splice(index, 1);
    updateCart();
    saveCartToLocalStorage();
  }
}

// Create cart sub total function
function createSubTotal() {
  let subtotal = 0;
  cartArray.forEach((product) => {
    // replace() method that removes non-numbers "R" from product prices for the sake of subtotal display
    const priceWithoutRand = product.price.replace(/[^\d.]/g, "");
    const price = Number(priceWithoutRand);
    subtotal += price;
  });
  cartSubTotal.innerText = `R${subtotal.toFixed(2)}`;
}
// ...

// Cart item count function
function updateCartQuantity() {
  cartQuantity.innerText = cartArray.length;
}

// Save cart data to local storage
function saveCartToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cartArray));
}

// Load cart data from local storage
function loadCartFromLocalStorage() {
  const cartData = localStorage.getItem("cart");
  if (cartData) {
    cartArray = JSON.parse(cartData);
    updateCart();
  }
}

// Show cart modal function
function showCart() {
  if (cartModalContainer.style.display === "none") {
    cartModalContainer.style.display = "block";
  } else {
    cartModalContainer.style.display = "none";
  }
}

// Close cart modal function
function closeCart() {
  if (cartModalContainer.style.display === "block") {
    cartModalContainer.style.display = "none";
  }
}
// ...

// Sticky navbar
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
}

const sticky = navBar.offsetTop;

// When the user scrolls on the page, stickyNav will be executed
window.onscroll = function () {
  stickyNav();
};
// ...

/* ---/ FUNCTIONS /--- */

/* --- EVENT LISTENERS --- */
window.addEventListener("load", function () {
  loadCartFromLocalStorage();
});

// Cart button event
cartBtn.addEventListener("click", function () {
  showCart();
});

// Modal close button event
cartModalClose.addEventListener("click", function () {
  closeCart();
});
// ...
/* ---/ EVENT LISTENERS /--- */
