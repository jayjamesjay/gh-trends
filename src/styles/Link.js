import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import { light } from './Theme';

export const Link = styled(RouterLink)`
  padding: 0.5rem;
  font-size: ${props => props.fontSize};
  font-family: 'Noto Sans HK', sans-serif;
  color: ${props => props.theme.color};
  text-decoration: none;
`;

Link.defaultProps = {
  theme: light,
  fontSize: '1.3rem'
};

export const HeaderLink = styled(Link)`
  margin: 0.5rem;
  font-weight: 700;
  font-size: 2rem;
`;

export const LinkA = styled.a`
  display: block;
  font-size: 1.2rem;
  font-family: 'Noto Sans HK', sans-serif;
  color: ${props => props.theme.color};
  text-decoration: none;
  cursor: pointer;
`;

LinkA.defaultProps = {
  theme: light
};
