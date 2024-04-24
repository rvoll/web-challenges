# Forms and A11y

This Codesandbox offers a form where the user can submit some information.

Unfortunately, the form is not accessible because there are some issues in the HTML.

## Task:

Switch to the [`index.html`](./index.html) file and make the form accessible!

## Questions to guide you:

- How do you connect a form with its headline?
  <!-- von Isabell: -->
    <!-- <h1 id="title" class="title">Understanding A11y in Forms</h1>
  
        <form aria-labelledby="title" aria-describedby="description" for="title"> -->

- How do you link a description to a specific <fieldset> element?

<!-- mein Versuch: -->
<!--         <fieldset aria-describedby="description">
 -->

- Do all interactive fields have their own label?

<!-- I added one -->

- Are all labels linked to their interactive fields with the help of the correct attributes?

<!-- I linked them using for=. -->

- Does this connections works correctly?
  - To check this, go to your browser and click on the label; the corresponding input field should now be focused.
  - If not, did we make a spelling mistake?
  <!-- All working now -->
- Do we need the given placeholder?
  <!-- NO -->

## Development

### CodeSandbox

Select the "Browser" tab to view this project.

### Local development

Use the Live Preview Extension for Visual Studio Code to view this project in the browser.  
Select the HTML file you want to view, press <kbd>⇧</kbd><kbd>⌘</kbd><kbd>P</kbd>, search for `Live Preview: Show Preview` and confirm with <kbd>Enter</kbd>.
