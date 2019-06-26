import styled from 'styled-components';
import { dark } from './Theme';

const inverColor = props => (props.theme.bg === dark.bg ? 'invert(100%)' : 'invert(0%)');

export const Img = styled.img`
  width: 100%;
  height: auto;
  filter: ${props => inverColor(props)};
`;

export const ImgIcon = styled(Img)`
  width: 3rem;
`;

export const ImgInline = styled.img`
  display: inline-block;
  width: auto;
  height: 2rem;
  filter: ${props => inverColor(props)};
`;
