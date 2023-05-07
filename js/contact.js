/* --- Element References --- */
// Navbar
const navBar = document.querySelector(".rowContainer");
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
/* ---/ Functions /--- */


/* --- Events --- */
/* ---/ Events /--- */