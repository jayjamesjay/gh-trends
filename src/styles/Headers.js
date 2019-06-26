import styled from 'styled-components';
import { light } from './Theme';

export const MainHeader = styled.header`
  padding: 1rem 0.5rem 0 0.5rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: env(safe-area-inset-top) env(safe-area-inset-right) 0 env(safe-area-inset-left);
  position: sticky;
  top: 0;
  z-index: 200;
  background: ${props => props.theme.bgAdd};
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15);
  text-transform: uppercase;

  @media screen and (min-width: 40rem) {
    justify-content: flex-start;
  }
`;

Header.defaultProps = {
  theme: light
};

export const H1 = styled.h1`
  margin: 2rem 0 0 0;
  font-size: 2rem;
  text-transform: uppercase;
`;

export const H1Alt = styled(H1)`
  margin: 3rem auto 1rem auto;
`;

export const H2 = styled.h2`
  margin: 0.2rem 0;
  font-size: 1.7rem;
`;

export default Header;
