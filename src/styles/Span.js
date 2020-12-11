import styled from 'styled-components';
import { light } from './Theme';

const Span = styled.span`
  font-weight: 400;
  font-size: 1.3rem;
  color: ${(props) => props.theme.colorAdd};
`;

Span.defaultProps = {
  theme: light,
};

export const LabelSpan = styled.span`
  position: relative;
  z-index: 100;
`;

export default Span;
