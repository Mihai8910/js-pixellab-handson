(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const showButton = document.querySelector('#showButton');
    const toggleButton = document.querySelector('#toggleEventButton');
    const eventBound = true;

    function showAlert() {
      alert('Butonul a fost apasat');
    }

    showButton.addEventListener('click', showAlert);

    toggleButton.addEventListener('click', function () {
      this;
      if (eventBound === true) {
        showButton.removeEventListener('click', showAlert);
        this.innerText = 'Porneste afisarea ';
        eventBound = false;
      } else {
        showButton.addEventListener('click', showAlert);

        eventBound = true;
      }
    });
  });
})();
