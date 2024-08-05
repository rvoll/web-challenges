import "./FavoriteButton.css";
import { ReactComponent as StarFilled } from "./star-filled.svg";
import { ReactComponent as Star } from "./star.svg";
import { useState } from "react";

export default function FavoriteButton() {
  // this should be a state variable
  const [isFavorite, setIsFavorite] = useState(false);

  function toggleFavorite() {
    setIsFavorite(!isFavorite);
  }

  return (
    <button
      className="favorite-button"
      onClick={() => {
        toggleFavorite();
        // console.log("favorite button clicked");
      }}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}

// The component has an `isFavorite` boolean variable.
// This variable is used to determine if the star icon
// should be filled in or not.

// - Make `isFavorite` a state variable.
// - This state variable needs to be toggled when the user clicks the favorite button.
// - Happy Hacking!
