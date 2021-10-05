class FetchWrapper {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    get(endpoint) {
        return fetch(this.baseURL + endpoint)
            .then(response => response.json());
    }
}

const GithubAPI  = new FetchWrapper("https://api.github.com");
const form = document.querySelector("#repos-form");
const username = document.querySelector("#github-username");
const button = document.querySelector("#get-repos");
const list = document.querySelector("#repo-cards");





form.addEventListener('submit', (event) => {
    event.preventDefault();

    GithubAPI.get(`/users/${username.value}`)
    
    .then(data => {
        // console.log(data)
        list.innerHTML = `
                <div class="repo-card">

                <div class="title-container"> 
                    <img src="${data.avatar_url}" alt="" class="title-img">
                    
                    <a href="${data.html_url}" target="_blank"><h3 class="repo-heading">${data.login.toUpperCase()}</h3></a>
                    
                </div>
                
                
                <p class="profile-description">
                    ${data.bio}
                </p>


                <div class="repo-stats">

                    <div>
                        <p>${data.public_repos}</p>
                        <p>REPOS</p> 
                    </div>

                    <div>
                        <p>${data.followers}</p>
                        <p>FOLLOWERS</p>
                    </div>

                    <div>
                        <p>${data.following}</p>
                        <p>FOLLOWING</p>
                    </div>
                </div>
            </div>
        `
})

})


