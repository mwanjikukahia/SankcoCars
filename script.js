document.getElementById('menu-icon').addEventListener('click', function() {
  var navbar = document.getElementById('navbar');
  navbar.classList.toggle('active'); // Toggle the 'active' class to show/hide the navbar
});


// HOME IMAGE SLIDES
let currentSlide = 0;

function slideNext() {
  const slides = document.querySelectorAll('.card-slide');
  if (currentSlide < slides.length - 2) {
    currentSlide++;
  } else {
    currentSlide = 1; // Loop back to the first slide
  }
  updateSlider();
}

function slidePrev() {
  const slides = document.querySelectorAll('.card-slide');
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = slides.length - 2; // Loop to the last slide
  }
  updateSlider();
}

function updateSlider() {
  const slides = document.querySelectorAll('.card-slide');
  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// HOME SEARCH SECTION
document.getElementById('carSearchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting in the traditional way
    
    // Collect form data
    const driver = document.querySelector('[name="driver"]').value;
    const drive = document.querySelector('[name="drive"]').value;
    const color = document.querySelector('[name="color"]').value;
    const county = document.querySelector('[name="county"]').value;
    
    // Display selected options (You can replace this with actual search logic)
    alert(`Searching for cars with the following details:
    Driver: ${driver}
    Drive: ${drive}
    Color: ${color}
    County: ${county}`);
});

// IMAGE SLIDE DETAILS (for cards)
// const prev = document.querySelector('.prev');
// const next = document.querySelector('.next');
// const slider = document.querySelector('.slider');
// let index = 0;

// function updateSliderPosition() {
//     slider.style.transform = `translateX(-${index * 100}%)`;
// }

// prev.addEventListener('click', () => {
//     if (index > 0) {
//         index--;
//         updateSliderPosition();
//     }
// });

// next.addEventListener('click', () => {
//     if (index < slider.children.length - 1) {
//         index++;
//         updateSliderPosition();
//     }
// });
document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('.vehicle-card');
  const totalCards = cards.length;
  const cardsPerPage = 3; // Show 3 cards per page on large screens
  const pagination = document.querySelector('.pagination');
  let currentPage = 1;

  // Function to show a specific page of cards
  function showPage(page) {
      cards.forEach((card, index) => {
          if (index >= (page - 1) * cardsPerPage && index < page * cardsPerPage) {
              card.style.display = 'flex'; // Show card
          } else {
              card.style.display = 'none'; // Hide card
          }
      });
  }

  // Function to initialize pagination controls
  function initPagination() {
      const totalPages = Math.ceil(totalCards / cardsPerPage);
      pagination.innerHTML = '';

      for (let i = 1; i <= totalPages; i++) {
          const pageButton = document.createElement('button');
          pageButton.innerText = i;
          pageButton.className = 'pagination-button';
          if (i === currentPage) {
              pageButton.classList.add('active');
          }
          pageButton.addEventListener('click', () => {
              currentPage = i;
              showPage(currentPage);
              updateActiveButton();
          });
          pagination.appendChild(pageButton);
      }
  }

  // Update active pagination button style
  function updateActiveButton() {
      document.querySelectorAll('.pagination-button').forEach(button => {
          button.classList.remove('active');
      });
      document.querySelectorAll('.pagination-button')[currentPage - 1].classList.add('active');
  }

  // Apply screen size settings
  function applyScreenSizeSettings() {
      if (window.innerWidth > 768) {
          // On large screens, show pagination and only 3 cards at a time
          initPagination();
          pagination.style.display = 'block';
          showPage(currentPage);
      } else {
          // On small screens, show all cards without pagination
          cards.forEach(card => card.style.display = 'flex');
          pagination.style.display = 'none';
      }
  }

  // Initial check on page load
  applyScreenSizeSettings();

  // Re-check screen size on window resize
  window.addEventListener('resize', applyScreenSizeSettings);
});
 