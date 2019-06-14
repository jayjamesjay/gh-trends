import styled from 'styled-components';
import { dark } from './theme';

export const Img = styled.img`
  width: 100%;
  height: auto;
  filter: ${props => (props.theme.bg === dark.bg ? 'invert(100%)' : 'invert(0%)')};
`;

export const ImgIcon = styled(Img)`
  width: 3rem;
`;

export const ImgInline = styled.img`
  height: 2rem;
  width: auto;
  display: inline-block;
`;
