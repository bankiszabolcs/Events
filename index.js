import data from "./data.json" assert { type: "json" };

//Simulate data coming from a server
const asyncData = await data;

const openButton = document.querySelector(".btn--open");
const overlay = document.querySelector(".overlay");

openButton.addEventListener("click", displayOverlay);

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function makeDate(event) {
  let options = {
    month: "long",
    day: "numeric",
  };
  const fromDate = new Intl.DateTimeFormat("en-US", options).format(
    new Date(event.from)
  );
  const toDate = new Intl.DateTimeFormat("en-US", options).format(
    new Date(event.to)
  );
  return fromDate + " - " + toDate;
}

function changeText(num) {
  const actualEvent = asyncData[num];
  document.querySelector(".table__firstrow").textContent = actualEvent.name;

  const dateString = makeDate(actualEvent);
  document.querySelector(".table__secondrow").textContent = dateString;
}

async function displayOverlay() {
  overlay.style.display = "flex";
  openButton.style.display = "none";

  const indexOfEvent = getRandomNum(0, asyncData.length);
  changeText(indexOfEvent);
}
