import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.primaryDark};
`;

export const LoginWrapper = styled.div`
  padding: 4rem;
  border-radius: 2px;
  background: ${(props) => props.theme.info};
  background: linear-gradient(
    12deg,
    ${(props) => props.theme.info},
    ${(props) => props.theme.infoLight}
  );

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 100%;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LabelIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  padding: 1rem;
  svg path {
    fill: ${(props) => props.theme.secondary};
  }
`;

export const LoginLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginInput = styled.input`
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.secondary};
  transition-duration: 0.2s;
  background-color: transparent;
  height: 3rem;
  color: ${(props) => props.theme.secondary};
  font-weight: bold;
  padding: 0.3rem 0.6rem;

  font-size: 1rem;

  outline: none;
  box-shadow: none;

  &:focus {
    outline: none;
    box-shadow: none;
    border-color: ${(props) => props.theme.pink};
  }

  &::placeholder {
    color: ${(props) => props.theme.secondary};
    filter: opacity(0.5);
    font-family: ${(props) => props.theme.font};
  }
`;

export const LoginButton = styled.button`
  transition-duration: 0.2s;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  margin: 2rem 0;
  color: ${(props) => props.theme.secondary};
  background-color: ${(props) => props.theme.pink};
  background: linear-gradient(
    to bottom left,
    ${(props) => props.theme.pink},
    ${(props) => props.theme.default}
  );
  background-size: 120% 120%;
  font-family: ${(props) => props.theme.font};

  border: none;
  outline: none;

  &:hover {
    cursor: pointer;
    transform: translateY(-4px);
  }
`;
