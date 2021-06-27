import {
  IndexContainer,
  IndexNav,
  IndexNavItem,
  IndexNavItems,
  IndexNavLogo,
  IndexWrapper,
} from "./styles";

import StyledLink from "@components/shared/StyledLink.shared";
import { logout } from "@slices/Session.slice";
import useAppDispatch from "../../hooks/useAppDispatch.hook";
import useAppSelector from "@hooks/useAppSelector.hook";

/**
 * Component's body
 */
const Index: React.FC<{}> = () => {
  const isLogged = useAppSelector((state) => state.session.isLogged);
  const dispatch = useAppDispatch();

  return (
    <IndexWrapper>
      <IndexContainer>
        <IndexNav>
          <IndexNavLogo>SCHOOL.IT</IndexNavLogo>
          <IndexNavItems>
            <IndexNavItem>
              <StyledLink to="/">Home</StyledLink>
            </IndexNavItem>
            <IndexNavItem>
              <StyledLink to="/dashboard">Dashboard</StyledLink>
            </IndexNavItem>
            <IndexNavItem>
              {!isLogged ? (
                <StyledLink to="/login">Login</StyledLink>
              ) : (
                <span onClick={() => dispatch(logout())}>Logout</span>
              )}
            </IndexNavItem>
            <IndexNavItem>
              <StyledLink to="/source">Source Code</StyledLink>
            </IndexNavItem>
            <IndexNavItem>
              <StyledLink to="/status">Status</StyledLink>
            </IndexNavItem>
          </IndexNavItems>
        </IndexNav>
      </IndexContainer>
    </IndexWrapper>
  );
};

export default Index;
