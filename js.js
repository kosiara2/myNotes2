const addBtn = document.querySelector(".add");
const cancelBtn = document.querySelector(".cancel");
const saveBtn = document.querySelector(".save");
const deleteBtn = document.getElementsByClassName(".delete-note");
const noteArea = document.querySelector(".note-area");
const notePanel = document.querySelector(".note-panel");
const category = document.querySelector("#category");
const textArea = document.querySelector("#text");
const error = document.querySelector(".error");
const deleteAllBtn = document.querySelector(".deleteAll");
let selectedValue;
let cardID = 0;

const openPanel = () => {
  notePanel.style.display = "flex";
};

const closePanel = () => {
  notePanel.style.display = "none";
  error.style.visibility = "hidden";
  textArea.value = "";
  category.selectedIndex = 0;
};

addBtn.addEventListener("click", openPanel);
cancelBtn.addEventListener("click", closePanel);
