import styled from "styled-components";
// import Link from "next/link";

// create 3 styled components:

// CardWrapper (will replace card))
// const CardTitle
// const CardDescription

const CardWrapper = styled.div`
  border-radius: 4px;
  padding: 8px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  background-color: skyblue;
  color: blue;
`;

const CardTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 1rem;
  color: darkblue;
`;

const CardDescription = styled.p`
  margin-top: 0;
  margin-bottom: 4px;
`;

export default function Card() {
  return (
    <CardWrapper>
      <CardTitle>Homer Simpson</CardTitle>
      <CardDescription>
        Homer Jay Simpson is a fictional character and the main protagonist of
        the American animated sitcom The Simpsons. He is voiced by Dan
        Castellaneta and first appeared, along with the rest of his family, in
        The Tracey Ullman Show short Good Night on April 19, 1987.
      </CardDescription>
    </CardWrapper>
  );
}

// import styled from "styled-components";
import Link from "next/link";

// // create 3 styled components:

// // CardWrapper (will replace card))
// // const CardTitle
// // const CardDescription

// copied styles - from /components/Card/Card.css:

// .card {
//   border-radius: 4px;
//   padding: 8px;
//   box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
//     0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
// }

// .card__title {
//   margin-top: 0;
//   margin-bottom: 12px;
//   font-size: 1.25rem;
// }

// .card__description {
//   margin-top: 0;
//   margin-bottom: 4px;
// }
