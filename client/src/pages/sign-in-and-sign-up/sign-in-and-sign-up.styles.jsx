import styled from "styled-components";

export const SignInAndSignUpContainer = styled.div`
  width: 850px;
  display: flex;
  justify-content: space-between;
  margin: 30px auto;

  @media screen and (max-width: 800px) {
    width: 95vw;
    overflow-x: hidden;

    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 50px;
  }
`;
