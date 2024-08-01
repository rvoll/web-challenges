# Title

Details Page

## Value Proposition

As someone who has no idea about movies <br>
I want to be able to select a movie from the list by clicking on it <br>
in order to get more detailed information about the movie I'm interested in.<br>

## Description

![wireframe](./assets/scribble-movie-detail-page.png)

## Acceptance Criteria

- [ ] Clicking on a movie title or image takes us to the `Movie detail page`
- [ ] The `Movie detail page` contains the App header with the title (same as on the Welcome page) and a link leading back to the Welcome page.
- [ ] The main section of the `Movie detail page` contains:
  - [ ] the movie title
  - [ ] the release date
  - [ ] the full movie poster
  - [ ] a description of the movie <br>
        (2-3 sentences)

## Tasks

- Create a branch `DetailsPage`
- Create a page `detailsPage` with a dynamic route depending on the `id` of the movie
- The `DetailsPage` must receive the following props:

  - title
  - date
  - image
  - description

- Create a `link` disguised as button leading back to the Welcome page

- Move the fetching logic from the `index.js` (implemented in User Story 1) to the `_app.` component and create a global UseState so that the information on the movies is available on all pages

- The format of the useState is an array containing one object per movie, each object consisting of id, title, date, image, rating and description
