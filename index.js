//dark mode
function changeMode() {
    const element = document.body;
    element.classList.toggle("dark-mode");
}

// Set API
const apiGit = `https://api.github.com`  
const searchInput = document.querySelector(".search__bar")
async function fetchResponse(url) {
    const response = await fetch(url);
    const info = await response.json();
    return info
} 

const cardEl = document.querySelector(".card")
const initialState = document.querySelector(".card__initial")
const searchEl = document.querySelector(".search")
searchEl.addEventListener('submit', async function(event){
    event.preventDefault();
    cardEl.style.display = "grid";
    initialState.style.display = "none";
    const apiSource = `${apiGit}/users/${searchInput.value}`
    const infoApi = await fetchResponse(apiSource)
    console.log(infoApi)
})