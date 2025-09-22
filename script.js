// Simple navigation between pages
// Dynamic greeting based on local time
function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 18) return "Good Afternoon";
  return "Good Evening";
}
document.getElementById('greeting').textContent = getGreeting() + '!';

// Dark/Light mode toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    themeToggle.textContent = '☀️';
  } else {
    themeToggle.textContent = '🌙';
  }
});
// Set initial icon
if (document.body.classList.contains('dark-mode')) {
  themeToggle.textContent = '☀️';
} else {
  themeToggle.textContent = '🌙';
}

// Responsive navbar: collapse on mobile (optional for future expansion)
document.getElementById('toPage2').addEventListener('click', function(e) {
  animateButton(e.target);
  setTimeout(() => {
    document.getElementById('page1').classList.add('hidden');
    document.getElementById('page2').classList.remove('hidden');
    setActiveNav('profile');
  }, 320);
});

document.getElementById('toPage3').addEventListener('click', function(e) {
  animateButton(e.target);
  setTimeout(() => {
    document.getElementById('page2').classList.add('hidden');
    document.getElementById('page3').classList.remove('hidden');
    setActiveNav('contact');
  }, 320);
});
// Navbar active state logic
function setActiveNav(page) {
  document.getElementById('nav-home').classList.remove('active');
  document.getElementById('nav-profile').classList.remove('active');
  document.getElementById('nav-contact').classList.remove('active');
  if (page === 'home') {
    document.getElementById('nav-home').classList.add('active');
  } else if (page === 'profile') {
    document.getElementById('nav-profile').classList.add('active');
  } else if (page === 'contact') {
    document.getElementById('nav-contact').classList.add('active');
  }
}
// Initial highlight for Home
setActiveNav('home');

// Navbar button click handlers
document.getElementById('nav-home').addEventListener('click', function(e) {
  e.preventDefault();
  showPage('page1');
  setActiveNav('home');
});
document.getElementById('nav-profile').addEventListener('click', function(e) {
  e.preventDefault();
  showPage('page2');
  setActiveNav('profile');
});
document.getElementById('nav-contact').addEventListener('click', function(e) {
  e.preventDefault();
  showPage('page3');
  setActiveNav('contact');
});

function showPage(pageId) {
  document.getElementById('page1').classList.add('hidden');
  document.getElementById('page2').classList.add('hidden');
  document.getElementById('page3').classList.add('hidden');
  document.getElementById(pageId).classList.remove('hidden');
}

// Add wave animation to all .main-btn on click
function animateButton(btn) {
  btn.classList.remove('wave');
  void btn.offsetWidth; // trigger reflow
  btn.classList.add('wave');
}

// Optional: Social button animation
document.querySelectorAll('.social-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    animateButton(btn);
  });
});

// Contact form validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();
    const formMsg = document.getElementById('formMsg');
    let valid = true;
    let msg = '';
    // Basic validation
    if (!name) {
      valid = false;
      msg = 'Please enter your name.';
    } else if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      valid = false;
      msg = 'Please enter a valid email address.';
    } else if (!message) {
      valid = false;
      msg = 'Please enter your message.';
    }
    if (valid) {
      msg = 'Thank you for reaching out! Your message has been sent.';
      contactForm.reset();
    }
    formMsg.textContent = msg;
    formMsg.style.color = valid ? '#56ab91' : '#d32f2f';
  });
}