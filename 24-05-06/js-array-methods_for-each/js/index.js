const colors = [
  "#343434",
  "#7FB5B5",
  "#633A34",
  "#354D73",
  "#F3A505",
  "#2A6478",
  "#CC0605",
  "#497E76",
  "#D36E70",
  "#FF2301",
  "#4C514A",
  "#2E3A23",
  "#5D9B9B",
  "#474A51",
  "#EFA94A",
  "#4D5645",
  "#606E8C",
  "#A5A5A5",
];

// Task 1:

colors.forEach((color) => {
  const colorElement = document.createElement("div");
  // // just4fun:
  // colorElement.textContent = color;

  colorElement.classList.add("color-box");

  // diese Zeile ist von Rahaf; weiß noch nicht, wie sie draufgekommen ist; selber ausprobieren!
  // das kommt von css
  // styles kann man anpassen und dann mit "." und camelCase parameter modifizieren
  colorElement.style.backgroundColor = color;

  document.body.append(colorElement);
});

// Task 2:

function renderColorBox(color) {
  const colorElement = document.createElement("div");

  // just4fun:
  colorElement.textContent = color;

  colorElement.classList.add("color-box");

  colorElement.style.backgroundColor = color;

  document.body.append(colorElement);
}

colors.forEach(renderColorBox);

// for each bezieht sich auf das was davor kommt, nicht was ihm folgt (counterintuitive)
// lies: for each of "colors" aplly function "renderColorBox" oder
// group of elements - for each memebr of group of elements - carry out function "render color box"
// die Reihenfolge von Funktion und forEach"phrase" ist egal, aber sollte per Konvention immer gleich sein.

// das war die Aufgabe: eine Fkt.
// für eine Box schreiben und die dann auf alle anwenden;
// eine andere mögliche aber hier nicht gefragte Version ist Isabells, nämlich,
//
//
// das hier funktioniert nur mit dem Anfang (Task1):
// renderColorBox.forEach(colors);

// Isabells:
// const renderColorBox = (colors) => {
//   colors.forEach((color) => {
//     const box = document.createElement("div");
//     box.classList.add("color-box");
//     box.style.backgroundColor = color;
//     document.body.append(box);
//   });
// };
// renderColorBox(colors);

// ab hier alles auskommentiert:
// // Task 2:
// // Rahafs Lösung; ich habs noch nicht probiert
// //
// function renderColorbox(color) {
//   // kopiert:
//   const colorElement = document.createElement("div");
//   // // just4fun:
//   // colorElement.textContent = color;

//   colorElement.classList.add("color-box");

//   colorElement.style.backgroundColor = color;

//   document.body.append(colorElement);
// }

// colors.forEach(renderColorBox);

// // // oder Isabell style, aber funktioniert noch ncht richtig:
// // renderColorbox.forEach((color) => {

// //   // kopiert:
// //   const colorElement = document.createElement("div");
// //   // // just4fun:
// //   // colorElement.textContent = color;

// //   colorElement.classList.add("color-box");

// //   colorElement.style.backgroundColor = color;

// //   document.body.append(colorElement);

// // });
