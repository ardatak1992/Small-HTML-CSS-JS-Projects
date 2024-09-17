const searchBar = document.getElementById("searchBar");
const card = document.querySelector(".card");

async function fetchUserData(userName) {
  try {
    const response = await fetch(`https://api.github.com/users/${userName}`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (response.status === "404") {
      throw new Error("User not Found");
    }

    const data = await response.json();

    const repos = await fetchLatestRepos(userName);

    
    return {
      avatarUrl: data.avatar_url,
      name: data.name,
      bio: data.bio,
      followers: data.followers,
      following: data.following,
      repoCount: data.public_repos,
      repos,
    };
  } catch (error) {
    console.log(error);
  }
}

async function fetchLatestRepos(userName) {
  try {
    const response = await fetch(
      `https://api.github.com/users/${userName}/repos`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    if (response.status === "404") {
      throw new Error("User not Found");
    }

    const data = await response.json();
    if (data.length > 5) {
      return data.slice(0, 5);
    } else {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
}

function createUserCard(user) {
  const { avatarUrl, name, bio, followers, following, repoCount, repos } = user;
  const card = document.createElement("div");
  const tagContainer = document.createElement("div");
  tagContainer.className = "tag-container";

  repos.forEach((repo) => {
    const tag = document.createElement("a");
    tag.className = "tag";
    tag.textContent = repo.name;
    tag.href = repo.html_url;
    tagContainer.appendChild(tag);
  });

  card.className = "card";

  card.innerHTML = `
    <img
          src="${avatarUrl}"
          class="profile-picture"
          alt=""
        />
        <div class="profile-info">
          <h1>${name}</h1>
          <p>
           ${bio ? bio : "No Info"};
          </p>
          <div class="socials">
            <p>${followers} Followers</p>
            <p>${following} Following</p>
            <p>${repoCount} Repos</p>
          </div>
          ${tagContainer.outerHTML}
        </div>
  `;

  return card;
}

searchBar.addEventListener("keydown", async (e) => {
  if (e.key == "Enter") {
    document.querySelector(".card").remove();
    const user = await fetchUserData(e.target.value);
    const userCard = createUserCard(user);
    e.target.value = "";
    document.querySelector(".container").appendChild(userCard);
  }
});
