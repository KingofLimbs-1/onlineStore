/* --- Element References --- */
// Navbar
const navBar = document.querySelector(".rowContainer");
// Cart item count
const cartQuantity = document.querySelector(".quantity");
// Mobile navbar
const mobileMenu = document.querySelector(".mobileMenu");
const navBarItems = document.querySelector(".navBarItems");
/* ---/ Element References /--- */

/* --- Functions --- */
// Sticky navbar
function stickyNav() {
    if (window.pageYOffset >= sticky) {
      navBar.classList.add("sticky")
    } else {
      navBar.classList.remove("sticky");
    }
  }
  
  const sticky = navBar.offsetTop;
  
  // When the user scrolls on the page, stickyNav will be executed
  window.onscroll = function() {stickyNav()};
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
/* ---/ Functions /--- */


/* --- Events --- */
// Mobile responsive navbar event
mobileMenu.addEventListener('click', () => {
  navBarItems.classList.toggle('active');
});
/* ---/ Events /--- */