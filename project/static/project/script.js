// Typed.js initialization
var typed = new Typed("#text", {
  strings: ['Frontend developer', 'Backend developer', 'Web developer'],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
});

//smooth
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});


// Function to show the sidebar
function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
}

// Function to hide the sidebar
function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'none';
}

// Google Sheets form submission
const scriptURL = 'https://script.google.com/macros/s/AKfycbwjC7UXEQezOW274me22yGCz2HanqDvbvGDlEGTBPnajPgACxlwi8DDn5LnZTFvvPlR/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(() => {
        msg.innerHTML = "";
      }, 2000);
      form.reset();
    })
    .catch(error => console.error('Error!', error.message));
});
