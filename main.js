document.getElementById('donation-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const contact = document.getElementById('contact').value;
  const address = document.getElementById('address').value;
  const amount = document.getElementById('amount').value;



  document.getElementById('donation-form').style.display = 'none';
  document.getElementById('thank-you').style.display = 'block';
  document.getElementById('name-display').innerText = name;
});