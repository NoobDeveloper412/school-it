import styled from "styled-components/macro";

export const IndexWrapper = styled.div`
  max-width: 100vw;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IndexContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  display: flex;
  flex-direction: column;
`;

export const IndexNav = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1.2rem 0;
`;

export const IndexNavLogo = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IndexNavItems = styled.div`
  display: flex;
`;

export const IndexNavItem = styled.div`
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  transition-duration: 0.2s;
  will-change: color;

  &:hover {
    color: ${(props) => props.theme.primary};
    cursor: pointer;
  }

  &:last-child {
    margin-right: 0rem;
  }
`;

export const IndexJumbotron = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
`;

export const IndexJumbotronHeading = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1,
  h3 {
    margin: 0;
  }
`;

export const IndexJumbotronImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  svg {
    width: 80%;
  }
`;
