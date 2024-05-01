console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  // console.log("It works.");

  // When clicking the "Add toast message" button
  // a new entry should be appended to the toast messages
  // container. Create the HTML element for a new
  // toast message with `document.createElement()`.
  const newMessage = document.createElement("li");
  newMessage.classList.add("toast-container__message");
  newMessage.textContent = "Cheers!";
  toastContainer.append(newMessage);
});

// When clicking the "Clear all toast messages" button,
// the list of toast messages should be emptied.
// Afterwards you should still be able to add
// new toast messages and clear them again.
//
clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  // console.log("This also works.");
  toastContainer.innerHTML = "";
});
