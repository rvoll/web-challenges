import FavoriteButton from "../FavoriteButton";
import "./Entry.css";
import Divider from "../Divider";
import { Fragment } from "react";

// last Question LEFT to DO:
// >>> I think I must use Fragment and Divider in the ENTRY component!
//
// If you are using this template:
// How can you render a <Divider /> component between each entry?
// Don't break the flexbox layout (a Fragment might help)
//
// Avoid having a divider below the last or above the first entry

// 😊 Now, the only thing left is to make the divider (see below!) conditional!

export default function Entry({ motto, notes, date, id }) {
  return (
    <Fragment key={id}>
      <article className="entry">
        <time className="entry__date">{date}</time>
        <div className="entry__content">
          <div className="entry__motto-container">
            <h2 className="entry__motto">
              <q>{motto}</q>
            </h2>
            <FavoriteButton />
          </div>
          <p className="entry__notes">{notes}</p>
        </div>
      </article>
      <Divider />
    </Fragment>
  );
}
