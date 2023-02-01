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
    writeHtmlCardInfo(infoApi)
    console.log(infoApi)
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

const userAvatar = document.getElementById("user-avatar")
const userName = document.getElementById("user-name")
const githubProfileLink = document.getElementById("profile-link")
const githubJoinDate = document.getElementById("join-date")
const userBio = document.getElementById("user-bio")
const userRepos = document.getElementById("user-repos")
const userFollowers = document.getElementById("user-followers")
const userFollowing = document.getElementById("user-following")
const userLocation = document.getElementById("user-location")
const userTwitter = document.getElementById("user-twitter")
const userBlog = document.getElementById("user-blog")
const userCompany = document.getElementById("user-company")

function writeHtmlCardInfo(infoApi){

    userAvatar.src = infoApi.avatar_url ? infoApi.avatar_url : 'images/Oval.png';
    userName.textContent = testValidation(infoApi.name)
    githubProfileLink.textContent =   testValidation(infoApi.login)
    githubProfileLink.href =  testValidation(infoApi.html_url)
    githubJoinDate.textContent =  testValidation(infoApi.created_at)
    userBio.textContent =  testValidation(infoApi.bio)
    userRepos.textContent =  testValidation(infoApi.public_repos)
    userFollowers.textContent =  testValidation(infoApi.followers)
    userFollowing.textContent = testValidation(infoApi.following)
   
    userLocation.textContent = testValidation(infoApi.location)
    userTwitter.textContent = testValidation(infoApi.twitter_username)
    
    userBlog.href = testValidation(infoApi.blog)
    userBlog.textContent = testValidation(infoApi.blog)
    
    userCompany.textContent = testValidation(infoApi.company)
}

function testValidation (apiValue){
    return apiValue ? apiValue : 'Empty';    
}