//dark mode
function changeMode() {
    const element = document.body;
    element.classList.toggle("dark-mode");
}

// Set API
const apiGit = `https://api.github.com`  
const searchInput = document.querySelector(".search__bar")
async function getUser(url) {
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
    setLoadingScreen();
    const apiSource = `${apiGit}/users/${searchInput.value}`
    const infoApi = await getUser(apiSource)
    writeHtmlCardInfo(infoApi)
    setCardScreen()
})

function setLoadingScreen() {
    initialState.style.display = "none";
    loading.style.display = "flex";
}

function setCardScreen(){
    loading.style.display = "none";
    cardEl.style.display = "grid";
}

function writeHtmlCardInfo(infoApi){
    console.log(infoApi)
}