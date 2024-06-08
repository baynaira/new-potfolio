
var typed = new Typed("#text", {
    strings: ['Frontend developer', 'Backend developer', 'web developer'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  });
  
  function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }
  
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwjC7UXEQezOW274me22yGCz2HanqDvbvGDlEGTBPnajPgACxlwi8DDn5LnZTFvvPlR/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
          msg.innerHTML = "Message sent successfully"
          setTimeout(function(){
            msg.innerHTML = ""
          }, 2000)
          form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })
  