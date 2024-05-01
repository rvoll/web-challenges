console.clear();

//from the demo:
// console.log("sanity check");

const form = document.querySelector('[data-js="form"]');

// console.log("form: ", form);

// listen for the submit event.
form.addEventListener("submit", (event) => {
  // stop the browser submitting the form
  event.preventDefault();

  // event.target (where the event happened)
  // console.log(event.target.elements);
  const formElements = event.target.elements;

  // we can target specific inputs
  // based on their id.
  // console.log("formElements.firstName.value", formElements.firstName.value);

  // OR, use formData to grab the contents
  // of the entire form
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log("data: ", data);

  /////////////////////////////////
  // reset form after submitting //
  /////////////////////////////////
  event.target.reset();

  //////////////////////////////
  // focus a specific element //
  //////////////////////////////
  formElements.firstName.focus();
});

// ## Bonus: Calculate and log the age-badness-sum 🤷‍♀️

// The formula is: `age + badness`

// Log to the console _(replace the values between the quotes)_:

// > The age-badness-sum of "firstName" is "age-badness-sum"
