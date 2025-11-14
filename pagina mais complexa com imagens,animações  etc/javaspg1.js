const fadeText = document.getElementById('fade-text');

window.onload = function() {
    fadeText.classList.add('visible');

  };
 fadeText.addEventListener("mouseover", event => {
   event.target.textContent = "Olá tudo bem? 😀";
})
