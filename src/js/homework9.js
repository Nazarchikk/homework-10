export const buttonColor = document.querySelector(".change-color");
export const span = document.querySelector(".color")
export const body = document.querySelector("body");
export const randomcolor = ()=>{
    body.style.backgroundColor = getRandomHexColor();
    span.textContent = getRandomHexColor();
};
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};
