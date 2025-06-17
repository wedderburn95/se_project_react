const baseUrl = "http://localhost:3001";

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

export async function getItems() {
  const response = await fetch(`${baseUrl}/items`);
  return checkResponse(response);
}

export function addNewClothingItem({ name, imageUrl, weatherType }) {
  console.log("API received:", { name, imageUrl, weatherType });
  const token = localStorage.getItem("jwt");
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name,
      imageUrl,
      weather: weatherType,
    }),
  }).then(checkResponse);
}

export async function deleteItem(itemId) {
  const token = localStorage.getItem("jwt");
  const res = await fetch(`${baseUrl}/items/${itemId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return checkResponse(res);
}

export const updateUserInfo = ({ name, avatar }) => {
  const token = localStorage.getItem("jwt");

  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar }),
  }).then(checkResponse);
};

export function addCardLike(cardId, token) {
  return fetch(`${baseUrl}/items/${cardId}/likes`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
}

export function removeCardLike(cardId, token) {
  return fetch(`${baseUrl}/items/${cardId}/likes`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
}
