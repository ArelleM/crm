function showMainPage() {
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("mainPage").style.display = "block";
  document.getElementById("detailPage").style.display = "none";

  fetch("https://reqres.in/api/users")
    .then((response) => response.json())
    .then((data) => {
      const userList = document.getElementById("userList");
      userList.innerHTML = "";
      data.data.forEach((user) => {
        userList.innerHTML += `<div class="max-w-xs m-4">
    <div class="bg-white shadow-xl rounded-lg py-3">
        <div class="photo-wrapper p-2">
            <img class="w-32 h-32 rounded-full mx-auto" src="${user.avatar}" alt="John Doe">
        </div>
        <div class="p-2">
            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">${user.first_name} ${user.last_name} </h3>
            <table class="text-xs my-3">
                <tbody>
                <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                    <td class="px-2 py-2">${user.email}</td>
                </tr>
            </tbody></table>

            <div class="text-center my-3">
                <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#" onclick="showUser(${user.id})">Voir profil</a>
            </div>

        </div>
    </div>
</div>`;
      });
    });
}

function showHomePage() {
  document.getElementById("homePage").style.display = "block";
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("registerPage").style.display = "none";
  document.getElementById("mainPage").style.display = "none";
  document.getElementById("detailPage").style.display = "none";
}

function showLoginPage() {
  document.getElementById("homePage").style.display = "none";
  document.getElementById("loginPage").style.display = "block";
  document.getElementById("registerPage").style.display = "none";
  document.getElementById("mainPage").style.display = "none";
  document.getElementById("detailPage").style.display = "none";
}

function showRegisterPage() {
  document.getElementById("homePage").style.display = "none";
  document.getElementById("loginPage").style.display = "none";
  document.getElementById("registerPage").style.display = "block";
  document.getElementById("mainPage").style.display = "none";
  document.getElementById("detailPage").style.display = "none";
}

// Ajoutez le reste de votre code JavaScript ici

function showUser(id) {
  document.getElementById("mainPage").style.display = "none";
  document.getElementById("detailPage").style.display = "block";

  fetch(`https://reqres.in/api/users/${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const userDetails = document.getElementById("userDetails");
      userDetails.innerHTML = `<div class="max-w-xs m-4">
      <div class="bg-white shadow-xl rounded-lg py-3">
          <div class="photo-wrapper p-2">
              <img class="w-32 h-32 rounded-full mx-auto" src="${data.data.avatar}" alt="John Doe">
          </div><div class="p-2">
      <h3 class="text-center text-xl text-gray-900 font-medium leading-8">${data.data.first_name} ${data.data.last_name} </h3>
      <table class="text-xs my-3">
          <tbody>
          <tr>
              <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
              <td class="px-2 py-2">${data.data.email}</td>
          </tr>
      </tbody></table>

      <div class="text-center my-3">
          <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#" onClick="showMainPage()" >Retour</a>
      </div>

  </div></div>
  </div>`;
    });
}

// Ajouter les fonctions suivantes à votre fichier script.js

function register() {
  let email = document.getElementById("registerEmail").value;
  let password = document.getElementById("registerPassword").value;

  fetch("https://reqres.in/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.id && data.token) {
        showMainPage();
      } else {
        alert("Registration failed");
      }
    });
}

function login() {
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  fetch("https://reqres.in/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.token) {
        showMainPage();
      } else {
        alert("Login failed");
      }
    });
}
