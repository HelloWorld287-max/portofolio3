document.addEventListener("DOMContentLoaded", function() {

  const worksBtn = document.getElementById('works-btn');
  const profileBtn = document.getElementById('home-btn');
  const textContent = document.getElementById('text-content');
  const galleryContent = document.getElementById('gallery-content');

  worksBtn.addEventListener('click', function(e) {
    e.preventDefault();

    textContent.style.display = 'none';
    galleryContent.style.display = 'flex';


   profileBtn.addEventListener('click', function(e) {
    e.preventDefault();

    galleryContent.style.display = 'none';
    textContent.style.display = 'block';
  });

    // trigger animasi
    setTimeout(() => {
      galleryContent.classList.add('show');
    }, 50);
  });

});


document.addEventListener("DOMContentLoaded", function() {

  const aboutBtn = document.getElementById('about-btn');
  const aboutPopup = document.getElementById('about-popup');

  // buka popup
  aboutBtn.addEventListener('click', function(e) {
    e.preventDefault();
    aboutPopup.style.display = 'flex';
  });

  // klik luar = tutup popup
  aboutPopup.addEventListener('click', function() {
    aboutPopup.style.display = 'none';
  });

});


document.addEventListener("DOMContentLoaded", function() {

  const homeBtn = document.getElementById('home-btn');
  const worksBtn = document.getElementById('works-btn');
  const aboutBtn = document.getElementById('about-btn');

  const textContent = document.getElementById('text-content');
  const galleryContent = document.getElementById('gallery-content');
  const aboutContent = document.getElementById('about-content');

  // WORKS → gallery
  worksBtn.addEventListener('click', function(e) {
    e.preventDefault();

    textContent.style.display = 'none';
    aboutContent.style.display = 'none';
    galleryContent.style.display = 'flex';
  });

  // ABOUT → container blur
  aboutBtn.addEventListener('click', function(e) {
    e.preventDefault();

    textContent.style.display = 'none';
    galleryContent.style.display = 'none';
    aboutContent.style.display = 'flex';
  });

  // HOME → balik ke text
  homeBtn.addEventListener('click', function(e) {
    e.preventDefault();

    galleryContent.style.display = 'none';
    aboutContent.style.display = 'none';
    textContent.style.display = 'block';
  });

});


document.addEventListener('click', function(e) {
  const ripple = document.createElement('span');
  ripple.classList.add('ripple');

  // ukuran ripple tergantung ukuran body
  ripple.style.width = ripple.style.height = '100px';

  // posisi ripple di klik
  ripple.style.left = e.clientX - 50 + 'px';
  ripple.style.top = e.clientY - 50 + 'px';

  document.body.appendChild(ripple);

  // hapus ripple setelah animasi selesai
  ripple.addEventListener('animationend', () => {
    ripple.remove();
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const dots = [];

  for(let i=0; i<5; i++){
    const dot = document.createElement('div');
    dot.classList.add('cursor-effect');
    dot.style.width = dot.style.height = 10 + 'px';
    dot.style.opacity = 0.6 - i*0.1;
    document.body.appendChild(dot);
    dots.push(dot);
  }

  document.addEventListener('mousemove', e => {
    dots.forEach((dot, index) => {
      setTimeout(() => {
        dot.style.left = e.clientX + 'px';
        dot.style.top = e.clientY + 'px';
      }, index * 50);
    });
  });
});