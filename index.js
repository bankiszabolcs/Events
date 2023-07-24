import data from "./data.json" assert { type: "json" };

//Simulate data coming from a server
const asyncData = await data;

const openButton = document.querySelector(".btn--open");
const overlay = document.querySelector(".overlay");

openButton.addEventListener("click", () => {
  overlay.style.display = "block";
  openButton.style.display = "none";
});
