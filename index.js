//Dark mode
function changeMode() {
    const element = document.body;
    element.classList.toggle("dark-mode");
}

// Set API

const cardEl = document.querySelector(".card")
const initialState = document.querySelector(".card__initial")
const loading = document.querySelector(".loading")
const searchEl = document.querySelector(".search")
const searchInput = document.querySelector(".search__bar")
const API_GIT  = `https://api.github.com`

searchEl.addEventListener('submit', async function(event){
    event.preventDefault();
    setLoadingScreen();
    const infoApi = await getUser(searchInput.value)
    // writeHtmlCardInfo(infoApi)
    setCardScreen()
})

async function getUser(username) {
    const response = await fetch(`${API_GIT}/users/${username}`);
    const info = await response.json();
    return info
}


function setLoadingScreen() {
    initialState.style.display = "none";
    cardEl.style.display = "none"
    loading.style.display = "flex";
}

function setCardScreen(){
    loading.style.display = "none";
    cardEl.style.display = "grid";
}
