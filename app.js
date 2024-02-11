const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

isInUser = document.querySelector("#isInUser");
isntInUser = document.querySelector("#isntInUser");

const username = localStorage.getItem(USERNAME_KEY);

if (username === null) {
    // Foreigner Greeting
    console.log("foreigner greeting");
    isntInUser.classList.remove(HIDDEN_CLASSNAME);
    isInUser.classList.add(HIDDEN_CLASSNAME);
} else {
    // User greeting
    console.log("user greeting");
    isInUser.classList.remove(HIDDEN_CLASSNAME);
    isntInUser.classList.add(HIDDEN_CLASSNAME);
}