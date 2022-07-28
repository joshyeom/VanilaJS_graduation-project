const searchBox = document.querySelector(".search-box__bar");
const searchBar = searchBox.querySelector("#search-bar");

function search(event) {
  event.preventDefault();
  const searchValue = searchBar.value;
  location.href = "https://www.google.com/search?q=" + searchValue;
}

searchBox.addEventListener("submit", search);
