// ========== MOBILE MENU TOGGLE ==========
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });
}

// ========== BOOKING FORM ALERT ==========
const bookingForm = document.getElementById('booking-form');
if (bookingForm) {
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for booking with Travel World. We will contact you soon!');
    bookingForm.reset();
  });
}

// ========== FAMOUS PLACES BY CITY ==========
const famousPlaces = {
  Lucknow: [
    { name: 'Bara Imambara', img: 'C:\\Lucknow\\Imambada.jpg' },
    { name: 'Rumi Darwaza', img: 'C:\\Lucknow\\RumiDarwaza.jpg' },
    { name: 'Ambedkar Park', img: 'C:\\Lucknow\\AmbedkarPark.jpg' },
    { name: 'Hazratganj Market', img: 'C:\\Lucknow\\HazratGanj.jpg' }
  ],
  Jaipur: [
    { name: 'Hawa Mahal', img: 'C:\\Jaipur\\HawaMahal.jpg' },
    { name: 'Amber Fort', img: 'C:\\Jaipur\\AmberFort.jpg' },
    { name: 'City Palace', img: 'C:\\Jaipur\\CityPalace.jpg' },
    { name: 'Jal Mahal', img: 'C:\\Jaipur\\JalMahal.jpg' }
  ],
  Delhi: [
    { name: 'India Gate', img: 'C:\\Delhi\\IndiaGate.jpg' },
    { name: 'Red Fort', img: 'C:\\Delhi\\RedFort.jpg' },
    { name: 'Qutub Minar', img: 'C:\\Delhi\\QutubMinar.jpg' },
    { name: 'Lotus Temple', img: 'C:\\Delhi\\LotusTemple.jpg' }
  ]
};

const destinations = document.querySelectorAll('.destination');
const cityInfo = document.getElementById('city-info');
const cityName = document.getElementById('city-name');
const placesGrid = document.getElementById('places-grid');

if (destinations && cityInfo && cityName && placesGrid) {
  destinations.forEach(dest => {
    dest.addEventListener('click', () => {
      const city = dest.querySelector('h3').textContent.trim();
      if (famousPlaces[city]) {
        cityName.textContent = `Famous Places in ${city}`;
        placesGrid.innerHTML = '';
        famousPlaces[city].forEach(place => {
          const div = document.createElement('div');
          div.classList.add('place-card');
          div.innerHTML = `<img src="${place.img}" alt="${place.name}"><p>${place.name}</p>`;
          placesGrid.appendChild(div);
        });
        cityInfo.style.display = 'block';
        cityInfo.scrollIntoView({ behavior: 'smooth' });
      } else {
        cityInfo.style.display = 'none';
        cityName.textContent = '';
        placesGrid.innerHTML = '';
      }
    });
  });
}
