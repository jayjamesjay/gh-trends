import styled from 'styled-components';
import { light } from './Theme';

const LabelCategory = styled.label`
  display: inherit;
  padding: 1rem 1.5rem;
  position: relative;
  background: transparent;
  overflow: hidden;
  font-size: 1.3rem;
  cursor: pointer;

  &::before {
    content: '';
    width: 90%;
    height: 90%;
    position: absolute;
    top: 5%;
    left: 5%;
    z-index: 20;
    background: ${(props) => props.theme.bgAdd};
    border-radius: 0.5rem;
    box-shadow: ${(props) => props.theme.shadow};
    transition: transform 0.15s ease-in-out;
    transform: translateX(${(props) => (props.$active ? '0%' : '-200%')});
  }
`;

LabelCategory.defaultProps = {
  theme: light,
};

export default LabelCategory;
