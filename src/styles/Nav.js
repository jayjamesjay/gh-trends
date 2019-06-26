import styled from 'styled-components';
import { light } from './Theme';

const Nav = styled.nav`
  width: 100%;
  padding: 0.7rem 0;
  position: fixed;
  top: 4.8rem;
  left: 0;
  z-index: 200;
  background: ${props => props.theme.bgAdd};
  box-shadow: 0 3px 6px 0 rgba(104, 104, 104, 0.5);
  opacity: ${props => (props.hide ? '0' : '1.0')};
  transition: opacity 0.2s linear;

  @media screen and (min-width: 40rem) {
    width: 50%;
    top: 1rem;
    left: 47%;
    box-shadow: none;
    opacity: 1;
  }
`;

Nav.defaultProps = {
  theme: light,
  hide: true
};

export default Nav;
