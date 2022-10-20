const form = document.getElementById("form");
const search = document.getElementById("search");
const result = document.getElementById("result");
const more = document.getElementById("more");

const apiURL = "https://api.lyrics.ovh";

//search by song or artist

const searchSongs = async (term) => {
  const response = await fetch(`${apiURL}/suggest/${term}`);
  const data = await response.json();
  console.log(data)
};

//event listeners

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value.trim();

  if (!searchTerm) {
    alert("Please type in a search term");
  } else {
    searchSongs(searchTerm);
  }
});
