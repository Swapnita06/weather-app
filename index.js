const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelector('.navbar-links');


function openNavbar() {
  navbarLinks.classList.add('active');
}


function closeNavbar() {
  navbarLinks.classList.remove('active');
}


toggleButton.addEventListener('click', () => {
  if (navbarLinks.classList.contains('active')) {
    closeNavbar();
  } else {
    openNavbar();
  }
});


const navbarLinksList = document.querySelectorAll('.navbar-links a');
navbarLinksList.forEach((link) => {
  link.addEventListener('click', closeNavbar);
});


let weather = {
  "apikey": "c626fefffccef5dfa90b463000809653"
}

const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '3ef7b00d3fmsh6a727320ec6b3f1p17c5b3jsn68a97a5a09e5',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

async function fetchWeather() {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}


fetchWeather();
