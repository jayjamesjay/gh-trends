import styled from 'styled-components';
import { light } from './Theme';

const Span = styled.span`
  color: ${props => props.theme.colorAdd};
  font-size: 1.3rem;
  font-weight: 400;
`;

Span.defaultProps = {
  theme: light
};

export const LabelSpan = styled.span`
  position: relative;
  z-index: 100;
`;

export default Span;
