document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.formula');
  form.addEventListener('submit', (event) => {
      event.preventDefault();

      const name = form.querySelector('input[name="name"]').value;
      const email = form.querySelector('input[name="email"]').value;
      const phone = form.querySelector('input[name="phone"]').value;
      const message = form.querySelector('textarea[name="message"]').value;

      const errors = [];

      if (!name) {
          errors.push('El nombre es obligatorio.');
      } else if (!/^[a-zA-Z\s]+$/.test(name)) {
          errors.push('El nombre solo puede contener letras y espacios.');
      }

      if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
          errors.push('El correo electrónico no es válido.');
      }

      if (!/^\d{10}$/.test(phone)) {
          errors.push('El teléfono debe tener 10 dígitos.');
      }

      if (message.length > 500) {
          errors.push('El mensaje no puede exceder 500 caracteres.');
      }

      const errorContainer = document.getElementById('error-container');
      errorContainer.innerHTML = '';
      if (errors.length > 0) {
          errors.forEach(error => {
              const errorElement = document.createElement('p');
              errorElement.textContent = error;
              errorContainer.appendChild(errorElement);
          });
      } else {
          // No errors, submit the form
          form.submit();
      }
  });
});
