function showMainPage() {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('mainPage').style.display = 'block';
    document.getElementById('detailPage').style.display = 'none';
  
    fetch('https://reqres.in/api/users')
      .then(response => response.json())
      .then(data => {
        const userList = document.getElementById('userList');
        userList.innerHTML = '';
        data.data.forEach(user => {
          userList.innerHTML += `<div>${user.first_name} ${user.last_name} <button onclick="showUser(${user.id})">Voir plus</button></div>`;
        });
      });
  }
  
  function showLoginPage() {
    document.getElementById('loginPage').style.display = 'block';
    document.getElementById('mainPage').style.display = 'none';
    document.getElementById('detailPage').style.display = 'none';
  }
  
  function showUser(id) {
    document.getElementById('mainPage').style.display = 'none';
    document.getElementById('detailPage').style.display = 'block';
  
    fetch(`https://reqres.in/api/users/${id}`)
      .then(response => response.json())
      .then(data => {
        const userDetails = document.getElementById('userDetails');
        userDetails.innerHTML = `Prénom: ${data.data.first_name} <br> Nom: ${data.data.last_name} <br> Email: ${data.data.email}`;
      });
  }

  // Ajouter les fonctions suivantes à votre fichier script.js

function register() {
  let email = document.getElementById('registerEmail').value;
  let password = document.getElementById('registerPassword').value;

  fetch('https://reqres.in/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.id && data.token) {
      showMainPage();
    } else {
      alert('Registration failed');
    }
  });
}

function login() {
  let email = document.getElementById('loginEmail').value;
  let password = document.getElementById('loginPassword').value;

  fetch('https://reqres.in/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
  .then(response => response.json())
  .then(data => {
    if (data.token) {
      showMainPage();
    } else {
      alert('Login failed');
    }
  });
}

  