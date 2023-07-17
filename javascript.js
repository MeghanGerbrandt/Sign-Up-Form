const form = document.getElementById('signup-form');
const errorMessages = document.querySelectorAll('.error');
const createAccountButton = document.querySelector('.acct-button');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
        
        createAccountButton.addEventListener('click', function(event) {
          event.preventDefault();
        
          // Reset error messages
          errorMessages.forEach(function(message) {
            message.style.display = 'none';
          });
        
          // Validate inputs
          const inputs = form.querySelectorAll('input');
          let valid = true;
        
          inputs.forEach(function(input) {
            if (!input.checkValidity()) {
              valid = false;
              input.nextElementSibling.style.display = 'block';
            }
            if (password.value !== confirmPassword.value) {
              valid = false; 
              confirmPassword.nextElementSibling.style.display = 'block';
            } 
            if (password.value.length < 8 || password.value.length > 12) {
              valid = false;
              password.nextElementSibling.nextElementSibling.style.display = 'block';
            }
            
          });
        
          if (valid) {
            form.reset();
            const successMessage = document.getElementById('successMessage');
            successMessage.style.display = 'block';
        
          }
        });