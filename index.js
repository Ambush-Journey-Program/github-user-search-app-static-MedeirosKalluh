const NOT_FOUND = 404

//Dark mode
function changeMode() {
    const element = document.body;
    element.classList.toggle("dark-mode");
}

// Set API

const initialState = document.querySelector(".card__initial")
const searchEl = document.querySelector(".search")
const searchInput = document.querySelector(".search__bar")
const API_GIT  = `https://api.github.com`

async function getUser(username) {
    const response = await fetch(`${API_GIT}/users/${username}`);
    const apiStatus = response.status
    const info = await response.json();
    return {...info, status:apiStatus}
}

searchEl.addEventListener('submit', async function(event){
    event.preventDefault();
    setLoadingScreen();
    const infoApi = await getUser(searchInput.value)
    setResult(infoApi)
})

function setResult (infoApi){
    if(infoApi.status === NOT_FOUND){
        setUserNotFound();
    } else {
        setCardScreen(infoApi)
    }
}
//  SET FUNCTIONS
const contentContainer = document.querySelector(".content")
function setLoadingScreen() {
    const loadingHtml = buildLoadingHtml()
    contentContainer.innerHTML =  loadingHtml
}

function setCardScreen(infoApi){
    const cardHtml = buildCardHTML(infoApi)
    contentContainer.innerHTML =  cardHtml
}

function setUserNotFound(){
    const notFoundHtml = buildNotFoundHtml()
    contentContainer.innerHTML = notFoundHtml
}

// BUILD FUNCTIONS
function buildLoadingHtml() {
  return `<div class="loading" id="loading">Loading</div>`
}

function buildNotFoundHtml() {
    return `
        <div class="not-found-screen" id="not-found">
            <img class="not-found__profile" src="images/notfound.svg" />
            <p>User not found...</p>
        </div>`
}

function setContentOrFallback (apiValue, value = "Empty"){
    return apiValue ? apiValue : value;
}

function setDisable(value){ if(!value){return "card__text--not-enabled"}}

function buildCardHTML(infoApi){
    const apiDate = new Date(infoApi.created_at).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric'})
    return `
        <div class="card">
            <img
            class="card__profile"
            id="user-avatar"
            src="${setContentOrFallback(infoApi.avatar_url, 'images/Oval.png')}"
            alt="User profile picture"
            />
            <div class="card__header">
            <div class="card__title">
                <h1 class="card__name" id="user-name">${setContentOrFallback(infoApi.name)}</h1>
                <a
                class="card__link"
                id="profile-link"
                href="${setContentOrFallback(infoApi.html_url)}"
                >${setContentOrFallback(infoApi.login)}
                </a>
            </div>
            <p class="card__date" id="join-date">${setContentOrFallback(`Joined ${apiDate}`)}</p>
            </div>

            <p class="card__bio card__text" id="user-bio">
            ${setContentOrFallback(infoApi.bio, "BIO EMPTY")}
            </p>

            <div class="card__info">
            <div class="card__activities">
                <p class="card__text">Repos</p>
                <h2 class="card__numbers" id="user-repos">${setContentOrFallback(infoApi.public_repos, "0")}</h2>
            </div>
            <div class="card__activities">
                <p class="card__text">Followers</p>
                <h2 class="card__numbers" id="user-followers">${setContentOrFallback(infoApi.followers, "0")}</h2>
            </div>
            <div class="card__activities">
                <p class="card__text">Following</p>
                <h2 class="card__numbers" id="user-following">${setContentOrFallback(infoApi.following, "0")}</h2>
            </div>
            </div>

            <div class="card__finder">
            <div class="card__social ${setDisable(infoApi.location)}">
                <img
                class="card__logo"
                src="images/loc.svg"
                alt="GPS Location Icon"
                />
                <p class="card__text" id="user-location">${setContentOrFallback(infoApi.location)}</p>
            </div>
            <div class="card__social ${setDisable(infoApi.twitter_username)}">
                <img
                class="card__logo"
                src="images/004-twitter.svg"
                alt="Twitter Bird Icon"
                />
                <p class="card__text" id="user-twitter">${setContentOrFallback(infoApi.twitter_username)}</p>
            </div>
            <div class="card__social card__adress ${setDisable(infoApi.blog)}">
                <img
                class="card__logo"
                src="images/002-url.svg"
                alt="Chain Link Icon"
                />
                <a class="card__text" id="user-blog" href="${setContentOrFallback(infoApi.blog)}">
                ${setContentOrFallback(infoApi.blog)}</a
                >
            </div>
            <div class="card__social ${setDisable(infoApi.company)}">
                <img
                class="card__logo"
                src="images/001-office-building.svg"
                alt="Office building Icon"
                />
                <p class="card__text" id="user-company">${setContentOrFallback(infoApi.company)}</p>
            </div>
            </div>
        </div>`
}