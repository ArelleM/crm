const axios = require("axios");

test("Vérifier la réussite de la requête API et la présence des utilisateurs", async () => {
  const response = await axios.get("https://reqres.in/api/users");
  // Vérifier le statut de la réponse
  expect(response.status).toBe(200);

  // Vérifier la présence des utilisateurs
  expect(response.data.data).toBeDefined();
  expect(response.data.data.length).toBeGreaterThan(0);
});

test("Vérifier la présence d'un utilisateur spécifique dans la liste", async () => {
  const id = 1;
  const response = await axios.get(`https://reqres.in/api/users/${id}`);

  // Vérifier le statut de la réponse
  expect(response.status).toBe(200);
  console.log(response.data);
  // Vérifier les détails de l'utilisateur spécifique
  expect(response.data.data).toBeDefined();
  expect(response.data.data.id).toBe(id);
});
