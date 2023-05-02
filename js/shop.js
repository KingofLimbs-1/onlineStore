/* --- REFERENCES --- */

// ARRAYS
const cartArray = [];
// ...

/* ---/ REFERENCES /--- */

/* --- OBJECTS/CLASSES --- */
/* ---/ OBJECTS/CLASSES /--- */

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

    // Modal creation
    productCard.addEventListener("click", function () {
      // Modal container reference
      const modalContainer = document.querySelector(".modalContainer");
      //   Display logic
      if (
        modalContainer.style.display === "none" ||
        modalContainer.style.display === ""
      ) {
        modalContainer.style.display = "block";
      }

      // Modal header reference
      const modalHeader = document.querySelector(".modalHeader");
      // Modal section reset
      modalHeader.innerHTML = "";
      // Heading creation
      const heading = document.createElement("h2");
      // Heading value assignment
      heading.textContent = product.name;
      modalHeader.appendChild(heading);
      // Close button creation
      const closeBtn = document.createElement("button");
      closeBtn.className = "closeBtn";
      closeBtn.innerHTML = '<img src="/images/shopPage/closeBtn.png"/>';
      heading.appendChild(closeBtn);
      closeBtn.addEventListener("click", function () {
        closeModal();
      });

      // Modal body reference
      const modalBody = document.querySelector(".modalBody");
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

      //   Modal footer reference
      const modalFooter = document.querySelector(".modalFooter");
      modalFooter.innerHTML = "";
      // Add to cart button creation
      const addBtn = document.createElement("button");
      addBtn.textContent = "Add to Cart";
      modalFooter.appendChild(addBtn);
    });
    // ...

    // Close modal function
    function closeModal() {
      const modalContainer = document.querySelector(".modalContainer");
      if (modalContainer.style.display === "block") {
        modalContainer.style.display = "none";
      }
    }
  });
}
// ...
/* ---/ FUNCTIONS /--- */

/* --- EVENT LISTENERS --- */
/* ---/ EVENT LISTENERS /--- */
