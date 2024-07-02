import Card from "@/components/Card";
import styled from "styled-components";

const PageTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 12px;
  font-size: 3.2;
  color: #1d3557;
`;

const SubTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 12px;
  /* font-size: 3.2; */
  color: #e63946;
`;

// https://coolors.co/palettes/trending

export default function HomePage() {
  return (
    <main>
      <PageTitle>
        Hier bin ich! <br></br>
        ...in der index.js in 'react-styled-components-.../pages' 😊
      </PageTitle>
      <SubTitle>
        Ich habe diese Farbe auf 'https://coolors.co/palettes/trending'
        <br />
        gefunden, hier reinkopiert, ein "#" davorgesetzt und schon...
        <br />
        Tadaaa! 💥 😊
      </SubTitle>

      <Card />
    </main>
  );
}
