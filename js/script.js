/* --- Element References --- */
// Navbar
const navBar = document.querySelector(".rowContainer");
// Featured products section
const featuredSection = document.querySelector(".featuredProducts");
// New products section
const newSection = document.querySelector(".newProducts");
// Explore button
const exploreBtn = document.querySelector(".exploreBtn");
// Cart item count
const cartQuantity = document.querySelector(".quantity");

// Mobile navbar
const mobileMenu = document.querySelector(".mobileMenu");
const navBarItems = document.querySelector(".navBarItems");
/* ---/ Element References /--- */

/* --- Objects/Classes --- */

// Featured products
const sections = [
  {
    name: "Living Room",
    image: "/images/homePage/livingRoomCard.jpeg",
    link: "/pages/shop.html#livingSection",
  },

  {
    name: "Dining Room",
    image: "/images/homePage/diningRoomCard.jpeg",
    link: "/pages/shop.html#diningSection",
  },

  {
    name: "Office",
    image: "/images/homePage/officeCard.jpeg",
    link: "/pages/shop.html#officeSection",
  },

  {
    name: "Decorations",
    image: "/images/homePage/decorCard.jpeg",
    link: "/pages/shop.html#decorSection",
  },
];

// New products
const newProducts = [
  {
    name: "Stylish Ottoman",
    image: "/images/shopPage/fancyOttoman.jpg",
    price: "R2,299.00",
  },
  {
    name: "Luxurious Dining Set",
    image: "/images/shopPage/luxDining.jpg",
    price: "R 29,999.00",
  },
  {
    name: "Multi-Shelved Bookshelf",
    image: "/images/shopPage/bookshelf.jpg",
    price: "R9,499.00",
  },
  {
    name: "Standing Floor Lamp",
    image: "/images/shopPage/floorLamp.jpg",
    price: "R3,499.00",
  },
];
/* ---/ Objects/Classes /--- */

/* --- Functionality --- */
// Populate "featured products" section cards
function populateFeaturedCards() {
  sections.forEach((section) => {
    featuredSection.innerHTML += `
    <div class="featuredCard">
    <a href="${section.link}">
      <div class="featuredContainer">
        <img src="${section.image}" alt="${section.name}" />
        <h2>${section.name}</h2>
      </div>
    </a>
  </div>
        `;
  });
}
populateFeaturedCards();
// ...

// Populate "new products" section function
function populateNewProductCards() {
  newProducts.forEach((product) => {
    newSection.innerHTML += `
    <div class="newCard">
          <a href="">
            <img src="${product.image}" alt="" />
            <div class="newContainer">
              <h2>${product.name}</h2>
              <span>${product.price}</span>
            </div>
          </a>
        </div>
    `;
  });
}
populateNewProductCards();
// ...

// Get cart from local storage function
function getCartFromLocalStorage() {
  const cartData = localStorage.getItem("cart");
  if (cartData) {
    return JSON.parse(cartData);
  }
}
// ...

// Get cart quantity from local storage
function getCartItemCount() {
  const cartData = localStorage.getItem("cart");
  if (cartData) {
    const cartArray = JSON.parse(cartData);
    return cartArray.length;
  }
}
// ...

const itemCount = getCartItemCount();
cartQuantity.innerText = itemCount.toString();
// ...
/* ---/ Functionality /--- */

/* --- Events --- */
// Mobile responsive navbar event
mobileMenu.addEventListener("click", () => {
  navBarItems.classList.toggle("active");
});
/* ---/ Events /--- */
