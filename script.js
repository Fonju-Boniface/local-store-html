$(document).ready(function () {
  const carousel = (container, margin) => {
    $(container).owlCarousel({
      loop: true,
      margin: margin,
      dots: true,
      autoplay: true,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        900: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });
  };

  carousel(".featured-products", 10);
  carousel(".new-arrival-products", 70);
  carousel(".product-categories", 20);
  carousel(".brands", 20);

  $(".hamburger").click(() => {
    $("nav").toggleClass("active");
  });
});



// Get the theme button element
const themeBtn = document.getElementById('theme-btn');

// Get the user's preferred theme from local storage
let currentTheme = localStorage.getItem('theme') || 'light';

// Apply the user's preferred theme
document.body.classList.toggle('dark-mode', currentTheme === 'dark');
themeBtn.classList.toggle('fi-rr-sun', currentTheme === 'dark');

// Toggle the theme when the button is clicked
themeBtn.addEventListener('click', () => {
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.body.classList.toggle('dark-mode');
  themeBtn.classList.toggle('fi-rr-sun');
  localStorage.setItem('theme', currentTheme);
});


