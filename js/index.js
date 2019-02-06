// Your code goes here
const logoEl = document.querySelector('.logo-heading');
const h2El = document.querySelectorAll('h2');
const signUpBtn = document.querySelectorAll('.btn');
const imgs = document.querySelectorAll('img');
const homeTag = document.querySelector('#home-tag');
const homeContainer = document.querySelector('.home');
const welcomeEl = document.querySelector('.welcomePar');
const h2Main = document.querySelector('.mainh2');

// Prevent Default
homeTag.addEventListener('click', e => {
  e.preventDefault();
  prompt("What's the magic word?");
  event.stopPropagation();
  console.log('clicked a tag');
});

// Click Event
logoEl.addEventListener('click', () => {
  TweenMax.from('.logo-heading', 2, { x: 300, ease: Elastic.easeOut });
  TweenMax.from('.nav-link', 1, { opacity: 0, y: 30, scale: 2, delay: 0.5, ease: Elastic.easeOut });
  console.log('clicked logo');
});

h2Main.addEventListener('click', () => {
  welcomeEl.classList.toggle('change');
  console.log('clicked mainh2  ${event.target}')
  console.log('clicked again ${event.currentTarget}');

});


homeContainer.addEventListener('click', () => {
  homeContainer.classList.toggle('change');
  alert('You shouldn\'t have clicked on that!');
  event.stopPropagation()
  console.log('clicked on body');
});

// Mouse Enter Event
Array.from(h2El).forEach(function (h2) {
  h2.addEventListener('mouseenter', e => {
    e.target.style.color = 'red';
  });
});

//Mouse Leave Event
Array.from(h2El).forEach(function (h2) {
  h2.addEventListener('mouseleave', e => {
    e.target.style.color = 'black';
  });
});

// Double Click Event
Array.from(signUpBtn).forEach(function (button) {
  button.addEventListener('dblclick', e => {
    e.target.parentNode.style.color = '#16A2B8';
  });
  console.log('double clicked');
});

Array.from(signUpBtn).forEach(function (button) {
  button.addEventListener('mouseleave', e => {
    e.target.parentNode.style.color = 'black';
  });
  console.log('mouse left');
});

// Scroll Event
window.addEventListener('scroll', () => {
  const scrollDown = document.documentElement.scrollHeight - window.innerHeight;
  const scrollEnd = window.scrollY;

  if (scrollEnd === scrollDown) {
    alert('Get On The Fun Bus!');
  }
  console.count('SO MANY SCROLLS!');
});




