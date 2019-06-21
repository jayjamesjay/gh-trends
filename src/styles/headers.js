import styled from 'styled-components';
import { light } from './theme';

export const MainHeader = styled.header`
  padding: 1rem 0.5rem 0 0.5rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 200;
  background: ${props => props.theme.bgAdd};
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15);
  padding: env(safe-area-inset-top) env(safe-area-inset-right) 0 env(safe-area-inset-left);

  @media screen and (min-width: 40rem) {
    justify-content: flex-start;
  }
`;

Header.defaultProps = {
  theme: light
};

export const H1 = styled.h1`
  font-size: 2rem;
  margin: 2rem 0 0 0;
`;

export const H1Alt = styled.h1`
  margin: 3rem auto 1rem auto;
  font-size: 2rem;
`;

export const H2 = styled.h2`
  font-size: 1.7rem;
  margin: 0.2rem 0;
`;

export default Header;
