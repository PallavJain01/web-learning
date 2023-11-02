//! TODO: Add a way to take `username` input from user and => `updateProfile(username)`

const
  logoELem = document.getElementById("container-logo"),
  detailsElem = document.getElementById("container-details"),
  reposElem = document.getElementById("container-repos"),

  userElem = document.getElementById("username"),
  followers_followingELem = document.getElementById("followers-following"),
  locationElem = document.getElementById("location")
;

async function getData(username) {
  let data = await fetch(`https://api.github.com/users/${username}`)
  let dataJson = await data.json();
  return await dataJson;
}


async function updateProfile(username = "PallavJain01") {
  let data = await getData(username);
  console.log(data);
  logoELem.innerHTML = `<img src="${data.avatar_url}" alt="logo" onclick="window.open('${data.html_url}')" />`;
  userElem.innerHTML = `${data.login}`;
  let followers = followers_followingELem.children[0];
  let following = followers_followingELem.children[2];
  followers.innerHTML = `<a href="https://www.github.com/${username}?tab=followers" target="_blank">${data.followers}</a>`;
  following.innerHTML = `<a href="https://www.github.com/${username}?tab=following" target="_blank">${data.following}</a>`;
  locationElem.innerHTML = (data.location) ? `${data.location}` : `earth`

  reposElem.innerHTML = "";
  let repos = await fetch(`https://api.github.com/users/${username}/repos`)
  let reposData = await repos.json();
  [...reposData].forEach((repo, idx) => {
    if (idx <= 30)
    reposElem.innerHTML += `<span class="repo" onclick="window.open('https://www.github.com/${username}/${repo.name}')">${repo.name}</a></span>`;
  })
}

updateProfile();