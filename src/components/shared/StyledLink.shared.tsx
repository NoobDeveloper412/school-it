import { Link } from "react-router-dom";
import styled from "styled-components/macro";

const StyledLink = styled(Link)`
  &:link,
  &:active,
  &:visited,
  &:hover {
    text-decoration: none;
    color: inherit;
  }
`;

export default StyledLink;
