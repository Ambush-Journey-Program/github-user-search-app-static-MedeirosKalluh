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
const loading = document.querySelector(".loading")
searchEl.addEventListener('submit', async function(event){
    event.preventDefault();
    const apiSource = `${apiGit}/users/${searchInput.value}`
    initialState.style.display = "none";
    loading.style.display = "flex";
    const infoApi = await fetchResponse(apiSource)
    loading.style.display = "none";  
    cardEl.style.display = "grid";
    console.log(infoApi)
})