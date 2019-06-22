import styled from 'styled-components';
import { light } from './Theme';

const Nav = styled.nav`
  transition: opacity 0.2s ease-in-out;
  opacity: ${props => (props.hide ? '0' : '1.0')};
  position: fixed;
  top: 4.8rem;
  left: 0;
  z-index: 200;
  width: 100%;
  background: ${props => props.theme.bgAdd};
  box-shadow: 0 3px 6px 0 rgba(104, 104, 104, 0.5);
  padding: 0.7rem 0;

  @media screen and (min-width: 40rem) {
    top: 1rem;
    left: 47%;
    width: 50%;
    opacity: 1;
    box-shadow: none;
  }
`;

Nav.defaultProps = {
  theme: light,
  hide: true
};

export default Nav;
