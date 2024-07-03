import styled from "styled-components";
import BoxWithClassName from "@/components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "@/components/BoxWithStyledComponents/BoxWithStyledComponents.js";
// besser "default export" mit {}; ohne ist es ein "named export"
// Welches ist denn jetzt besser? Ich bin verwirrt...

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function HomePage() {
  return (
    <StyledContainer>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents isBlack />
    </StyledContainer>
  );
}
