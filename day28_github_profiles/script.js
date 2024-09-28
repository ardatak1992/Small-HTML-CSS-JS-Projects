const searchBar = document.getElementById("searchBar");
const card = document.querySelector(".card");

async function fetchUserData(userName) {
  try {
    const response = await fetch(`https://api.github.com/users/${userName}`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });

    const data = await response.json();

    if (data.status === "404") {
      throw new Error("User not Found");
    }

    const repos = await fetchLatestRepos(userName);

    return [data, repos];
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
      throw new Error("Repos not Found");
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
  const card = document.createElement("div");
  const tagContainer = document.createElement("div");
  tagContainer.className = "tag-container";
  card.className = "card";
  if (user) {
    const { avatar_url, name, bio, followers, following, public_repos } =
      user[0];

    user[1].forEach((repo) => {
      const tag = document.createElement("a");
      tag.className = "tag";
      tag.textContent = repo.name;
      tag.href = repo.html_url;
      tagContainer.appendChild(tag);
    });

    card.innerHTML = `
    <img
          src="${avatar_url}"
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
            <p>${public_repos} Repos</p>
          </div>
          ${tagContainer.outerHTML}
        </div>
  `;
  } else {
    card.classList.add("no-user")
    card.innerHTML = `<h1>No User Found</h1>`;
  }
  

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
