const USERNAME_KEY = "username";
const HIDDEN_CLASSNAME = "hidden";

isInUser = document.querySelector("#isInUser");
isntInUser = document.querySelector("#isntInUser");

let username = localStorage.getItem(USERNAME_KEY);

if (username === null) {
    // Foreigner Greeting
    console.log("foreigner greeting");
    isntInUser.classList.remove(HIDDEN_CLASSNAME);
    isInUser.classList.add(HIDDEN_CLASSNAME);

    const input_name = document.querySelector("#register_form input");
    const input_button = document.querySelector("#register_form button");

    function onInputButtonClick(info) {
        info.preventDefault();
        name = input_name.value;
        localStorage.setItem(USERNAME_KEY, name);
    }

    input_button.addEventListener("click", onInputButtonClick);
} else {
    // User greeting
    console.log("user greeting");
    isInUser.classList.remove(HIDDEN_CLASSNAME);
    isntInUser.classList.add(HIDDEN_CLASSNAME);


    const user_greeting = document.querySelector("#user_greeting");
    storedUsername = localStorage.getItem(USERNAME_KEY);
    user_greeting.innerText = `Hello ${storedUsername}!`;
}