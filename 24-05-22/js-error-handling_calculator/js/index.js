console.clear();

const form = document.querySelector("form");
const output = form.querySelector("output");

// data-js="error-message"></p>

// richtige Lösung gemeinsam (die error message sollte auf der Seite erscheinen,
// so dass der USer sie sieht; nicht nur in der Konsole):
const errorElement = document.querySelector('[data-js="error-message"]');

// ursprgl. Code ausgeklammert:
// const operations = {
//   add: (a, b) => a + b,
//   subtract: (a, b) => a - b,
//   multiply: (a, b) => a * b,
//   divide: (a, b) => {
//     if (b === 0) {
//       throw new Error("Cannot divide by zero!");
//     }
//     return a / b;
//   },
// };

// Rahafs Lösung:
// selber noch richtig angucken,
// durchdenken und verstehen!
const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    // try LÖSCHEN
    if (b === 0) {
      throw new Error("Cannot divide by zero!");
      // Wenn man die Zeile oben durch diese unten ersetzt funtioniert es auch,
      // nur das Ergebnis der Rechnung ist "infinity" an Stelle von "undefined"
      // console.log("Cannot divide by zero!");
    }
    // das return statement
    return a / b;
    // } catch (error) { LÖSCHEN
    //   console.log(
    //     error.message,
    //     // wenn man die Zeile oben:
    //     // error.message,
    //     //  weglässt wird nur die untere console.log-Nachricht angezeigt.
    //     "Please pass a number rather than a 0 as a divisor"
    //   );
    // } LÖSCHEN
  },
};

// try {
//   divide: (a, b) => a / b;
// } catch {
//   // if (b === 0) =>
//   ("Cannot divide by zero!");
// }

// Jessica: "try catch nicht oben sondern hierunter:"

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = Number(event.target.firstNumber.value);
  const secondNumber = Number(event.target.secondNumber.value);
  const operation = event.target.operation.value;
  // so sieht das try...catch aus:
  // try {
  // } catch (error) {}
  try {
    output.innerText = operations[operation](firstNumber, secondNumber);
    // wenn das oben klappt wird catch ignoriert.
    //
    // die folgende Zeile bewirkt, dass der Fehlerhinweis nach einer Rechnung mit "0" als Dividend
    // bzw. vor der nächsten Rechnung wieder gelöscht wird:
    errorElement.innerText = "";
    // die folgende Zeile bewirkt, dass die Felder im Formular vor der nächsten Rechung wieder leer sind:
    form.reset();
  } catch (error) {
    errorElement.innerText = error;
    // Hm. Nicht sicher, wieso das so mit error funktioniert; es kommt von oben aus der Zeile:
    //   'throw new Error("Cannot divide by zero!");'
    //
    // console.log("Cannot divide by zero!", error);
    form.reset();
  }

  // output.innerText = operations[operation](firstNumber, secondNumber);
  // LÖSCHEN
});
