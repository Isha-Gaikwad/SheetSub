
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzaIdyih4-6CLaJiC-IBhoUrefUntIjC-vhn3O4UkZlJG3Sv_sN0sG6m1lbb5qbQ17G/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
            msg.innerHTML = "Thank You For Subscribing!"
           setTimeout(function() {  
        msg.innerHTML = " "
      }, 5000)
            form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
