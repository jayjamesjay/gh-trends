import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import { light } from './theme';

export const Link = styled(RouterLink)`
  color: ${props => props.theme.color};
  text-decoration: none;
  font-size: ${props => props.fontSize};
  font-family: 'Noto Sans HK', sans-serif;
  padding: 0.5rem;
`;

Link.defaultProps = {
  theme: light,
  fontSize: '1.3rem',
};

export const HeaderLink = styled(Link)`
  font-size: 2rem;
  font-weight: 700;
  margin: 0.5rem;
`;

export const LinkA = styled.a`
  cursor: pointer;
  display: block;
  color: ${props => props.theme.color};
  text-decoration: none;
  font-size: 1.2rem;
  font-family: 'Noto Sans HK', sans-serif;
`;

LinkA.defaultProps = {
  theme: light,
};
