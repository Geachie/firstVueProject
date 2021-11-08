"use strict";

const buttonEl = document.querySelector("button");
const inputEl = document.querySelector("input");
const listEl = document.querySelector("ul");

const addGoal = () => {
  const enteredValue = inputEl.value;
  const listItemEL = document.createElement("li");
  listItemEL.textContent = enteredValue;
  listEl.appendChild(listItemEL);
  inputEl.value = "";
};

buttonEl.addEventListener("click", addGoal);
