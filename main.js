const title = document.querySelector(".hello");



function handleMouseEnter() {
    title.innerText = "Mouse is here!";
    console.log("Mouse is here!");
}

function handleTitleClick() {
    title.style.color = "blue";
    title.innerText = "Title was clicked!";
    console.log("Title was clicked!");
}

function handleMouseLeave() {
    title.style.color = "black";
    title.innerText = "Mouse left!";
    console.log("Mouse left!");
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
    console.log("복사 차단");
    navigator.clipboard.writeText("*");
    alert("복사가 차단되었습니다.");
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);