(function() {
    var form = document.querySelector('form');
    var checkbox = form.querySelector('input[type="checkbox"]');
    var allowed = false;

  form.addEventListener('submit', function(event) {
        if (allowed) {
            console.log('you may pass');
            event.preventDefault(); // needs to be removed in the real world
        }

        if (!allowed) {
            console.log('you shall not pass');
            event.preventDefault();
        }
  });

    function toggleButton() {
        var nonvisualHint = form.querySelector('.visually-hidden');
      var submitButton = form.querySelector('button');
      if (allowed) {
        submitButton.setAttribute('aria-disabled', 'false');
        nonvisualHint.textContent = 'Please hit the submit button to subscribe to our newsletter.';
      } else {
        submitButton.setAttribute('aria-disabled', 'true');
        nonvisualHint.textContent = 'Please check the checkbox and agree to our terms to send this form.';
      }
    }

    toggleButton();
    checkbox.addEventListener('change', function() {
        allowed = checkbox.checked;
    toggleButton();
    });
})();