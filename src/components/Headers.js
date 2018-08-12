import styled from "styled-components";

export const H1 = styled.h1`
  text-align: center;
  font-size: 5rem;
  font-family: ${props => props.theme.headerFont}, sans-serif;
  margin: 0;
  color: ${props => props.theme.white};
  @media (max-width: 500px) {
    font-size: 4rem;
  }
`;
export const H2 = styled.h2`
  text-align: center;
  font-size: 3rem;
  font-family: ${props => props.theme.headerFont}, sans-serif;
  margin: 0;
  color: ${props => props.theme.white};
  @media (max-width: 500px) {
    font-size: 3rem;
  }
`;
export const H2Alt = H2.extend`
  color: ${props => props.theme.black};
`;
export const H3 = styled.h3`
  text-align: center;
  font-size: 2rem;
  font-family: ${props => props.theme.headerFont}, sans-serif;
  margin: 0;
  color: ${props => props.theme.white};
  @media (max-width: 500px) {
    font-size: 1.75rem;
  }
`;
export const H3Alt = H3.extend`
  color: ${props => props.theme.black};
`;
