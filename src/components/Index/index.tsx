import {
  IndexContainer,
  IndexJumbotron,
  IndexJumbotronHeading,
  IndexJumbotronImage,
  IndexNav,
  IndexNavItem,
  IndexNavItems,
  IndexNavLogo,
  IndexWrapper,
} from "./styles";

import { ColoredSpan } from "../shared/ColoredSpan.shared";
import StyledLink from "@components/shared/StyledLink.shared";
import { logout } from "@slices/Session.slice";
import useAppDispatch from "../../hooks/useAppDispatch.hook";
import useAppSelector from "@hooks/useAppSelector.hook";

// import { ReactComponent as JumbotronImage } from "@assets/svg/exam.svg";

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
          <IndexNavLogo>
            SCHOOL<ColoredSpan>.</ColoredSpan>IT
          </IndexNavLogo>
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
        <IndexJumbotron>
          <IndexJumbotronHeading>
            <h1>
              School management made <ColoredSpan>easy</ColoredSpan>
            </h1>
            <h3>Simple, scalable and blazing-fast RMS</h3>
          </IndexJumbotronHeading>
          <IndexJumbotronImage>
            <div>Image goes here</div>
            {/* <JumbotronImage /> */}
          </IndexJumbotronImage>
        </IndexJumbotron>
      </IndexContainer>
    </IndexWrapper>
  );
};

export default Index;
