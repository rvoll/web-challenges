import styled from "styled-components";

const StyledH1 = styled.h1`
  text-align: center;
  color: brown;
`;
export default function HomePage() {
  return (
    <div>
      <StyledH1>
        Hallo!
        <br />
        Ich bin die index.js, im pages-Ordner ...die Welcome-Seite also.
      </StyledH1>
    </div>
  );
}
