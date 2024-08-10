import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [holiday, setHoliday] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // const form = event.target;
    setHoliday(event.target.holiday.value);
    setDate(event.target.date.value);
  }

  // refactor the handleSubmit function so that
  // the App component has access to the submitted data,

  // the submitted data is dynamically rendered
  // in the respective output fields below the form.
  // You can use the following hints as guideline:

  // Create a separate state for holiday and date.

  // The handleSubmit function sets both states with
  // its corresponding values.

  // Do you remember how to access the values of the target fields?

  // Don't forget to dynamically render the state variables
  // in the output area.

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   const form = event.target;
  //   console.log(form);
  //   setHoliday(form.elements.holiday.value);
  //   setDate(form.elements.date.value);
  //   form.reset();
  //   form.holiday.focus();
  // }

  return (
    <div className="container">
      <h1>Favourite Holiday Data Storage</h1>
      <h2 id="favourite-holiday">Please tell us your favourite holiday!</h2>
      <form
        className="form"
        aria-labelledby="favourite-holiday"
        onSubmit={handleSubmit}
      >
        <label htmlFor="holiday">My Favourite Holiday: </label>
        <input
          id="holiday"
          type="text"
          name="holiday"
          placeholder="e.g. Christmas"
        />
        <label htmlFor="date">Date: </label>
        <input id="date" type="date" name="date" />
        <button
          type="submit"
          className="form__submit-button"
          // onSubmit={handleSubmit()}
        >
          Submit
        </button>
      </form>
      <h2>Output of Submitted Data</h2>
      <p>
        Favourite Holiday:
        <span className="output" key={"holiday"}>
          {holiday}
        </span>
      </p>
      <p>
        Date: <span className="output">{date}</span>
      </p>
    </div>
  );
}
