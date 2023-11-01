// Fetch IP information using an API
fetch('https://ipapi.co/json/')
  .then(response => response.json())
  .then(data => {
    document.getElementById('ipAddress').textContent = data.ip;
    document.getElementById('location').textContent = `${data.city}, ${data.region}, ${data.country_name}`;
    document.getElementById('isp').textContent = data.org;
  })
  .catch(error => console.log(error));
