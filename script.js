function validateLogin(event) {
  event.preventDefault(); // Prevent form submission

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('errorMessage');

  // Check if credentials are valid
  if (username === 'admin' && password === 'admin') {
      window.location.href = 'converter.html'; // Redirect to currency converter page
  } else {
      errorMessage.textContent = 'Invalid username or password!';
      errorMessage.style.display = 'block';
  }
}
