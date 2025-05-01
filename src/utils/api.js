const baseUrl = "http://localhost:3001";

export async function getItems() {
  const response = await fetch(`${baseUrl}/items`);
  return await (response.ok
    ? response.json()
    : Promise.reject(`Error: ${response.status}`));
}

export function addNewClothingItem(name, imageUrl, weather) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      imageUrl,
      weather,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  });
}

export async function deleteItem(itemId) {
  const res = await fetch(`${baseUrl}/items/${itemId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`);
  }
  return await res.json();
}

// 2 ways to deal with asynchronous code:
// 1. Promises - .then() and .catch() methods
// 2. Async/Await - async function and await keyword
