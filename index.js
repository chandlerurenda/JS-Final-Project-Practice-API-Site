// APIs
// API 1: "https://dummyjson.com/users"
// API 2: "https://dummyjson.com/users/posts?userId=:id"

async function main() {
  const users = await fetch("https://dummyjson.com/users");
  const usersData = await users.json();
  const userListEl = document.querySelector(".user-list");

  userListEl.innerHTML = usersData.map((user) => userHTML(user)).join("");
}

main();

function showUserPosts(id) {
    localStorage.setItem("id", id)
    console.log(window.location);
    window.location.href = `${window.location.origin}/user.html`

}

function userHTML(user) {
  return `<div class="user-card" onclick="showUserPosts(${user.id})">
    <div class="user-card__container">
        <h3>${user.name}</h4>
        <p><b>Email:</b> ${user.email}</p>
        <p><b>Phone:</b> ${user.phone}</p>
        <p><b>Website:</b> <a href="https://${user.website}" target="_blank">
        ${user.website}
        </a></p>
    </div>
</div>`;
}
