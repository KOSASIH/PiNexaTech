// frontend/scripts/main.js

document.addEventListener('DOMContentLoaded', function() {
  // JavaScript code to execute after the DOM has loaded
  console.log('DOM content loaded');

  // Example: Add event listener to a button
  const button = document.getElementById('myButton');
  if (button) {
    button.addEventListener('click', function() {
      alert('Button clicked!');
    });
  }
});
