import data from "./data.json" assert { type: "json" };

// Simulate data coming from a server
const asyncData = await data;

const openButton = document.querySelector(".btn--open");
const overlay = document.querySelector(".overlay");

openButton.addEventListener("click", displayOverlay);

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function makeDate(event) {
  const options = {
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

  const table = document.querySelector(".table");

  table.style.backgroundColor = actualEvent.color;

  generateCols(actualEvent.talent);
}

function generateCols(nameArr) {
  const thirdRow = document.querySelector(".table__thirdrow");

  for (let i = 0; i < nameArr.length; i++) {
    if (nameArr.length > 1) {
      const div = document.createElement("div");
      div.classList.add(`table__thirdrow--col${i}`);
      div.textContent = nameArr[i];
      thirdRow.appendChild(div);
      div.style.borderRight = "4px solid black";
      if (i === nameArr.length - 1) div.style.borderRight = "0";
    } else {
      thirdRow.textContent = nameArr[i];
      thirdRow.style.justifyContent = "center";
      thirdRow.style.alignItems = "center";
    }
  }
}

function displayOverlay() {
  overlay.style.display = "flex";
  openButton.style.display = "none";

  const indexOfEvent = getRandomNum(0, asyncData.length);
  changeText(indexOfEvent);
}
