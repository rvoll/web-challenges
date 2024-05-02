console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

// const toast-container__message =

addButton.addEventListener("click", () => {
  // document.createElement("li");
  //
  li.classList.add("toast-container__message");
  li.textContent = "Cheers!";
  ol.append("li");
  // Exercise: Append a new entry to the toast messages container
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  // check whether this works:
  toastContainer.innerHTML = "";
});
