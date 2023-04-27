fetch('https://localhost:3000/endpoint', {
  method: 'POST', // or 'GET', 'PUT', 'DELETE', etc. depending on your backend API
  headers: {
    'Content-Type': 'application/json', // or any other content type required by your backend
    // You can also include additional headers if needed
    'Authorization': 'Bearer your_token' // if your backend requires authentication
  },
  body: JSON.stringify({ key1: 'value1', key2: 'value2' }) // data to send to the backend
})
  .then(response => response.json()) // parse the response as JSON
  .then(data => {
    // Handle the response data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors that occur during the request
    console.error('Error:', error);
  });