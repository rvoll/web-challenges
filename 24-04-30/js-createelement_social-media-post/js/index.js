console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and
// append another social media post to the body.
//
// Your task is to replicate the social media post with JavaScript.
// Use document.createElement() to generate all HTML elements separately.

//First, define a variable for the thing you want to create,
// like section, p, li, etc.
const socialMediaPost = document.createElement("socialMediaPost");
// Then add the relevant class so it behaves as it should
socialMediaPost.classList.add("post");

// Finally append the item to its parent in the html;
// beloiw, it is necessary to include document.
document.body.append(socialMediaPost);

// create first child
const p = document.createElement("p");
p.classList.add("post__content");
p.textContent =
  "Hier ist der zweite Post. Damit die Größe mit der des ersten übereinstimmt muss man genug schreiben.";

// append to the article
socialMediaPost.append(p);

// create second child (footer)
const footer = document.createElement("footer");
footer.classList.add("post__footer");

// append to the article
socialMediaPost.append(footer);

// need to create 2 children for the footer

// create span
const userName = document.createElement("span");
userName.classList.add("post__username");
userName.textContent = "me@you.us";

// append to the footer
footer.append(userName);

//create button
const newButton = document.createElement("button");
newButton.classList.add("post__button");
newButton.textContent = "♥ Like";

// append to the footer
footer.append(newButton);

// assign a function to the new button
// not sure: is "handleLikeButtonClick" a fixed formula?
// Ja. Siehe README.
newButton.addEventListener("click", handleLikeButtonClick);
