import styled from 'styled-components';
import { light } from './Theme';

const LabelTab = styled.label`
  display: inherit;
  cursor: pointer;
  font-size: 1.3rem;
  padding: 1rem 1.5rem;
  background: transparent;
  position: relative;
  overflow: hidden;

  &::before {
    transition: transform 0.15s ease-in-out;
    position: absolute;
    z-index: 20;
    top: 5%;
    left: 5%;
    content: '';
    width: 90%;
    height: 90%;
    transform: translateX(${props => (props.active ? '0%' : '-200%')});
    background: ${props => props.theme.bgAdd};
    box-shadow: ${props => props.theme.shadow};
  }
`;

LabelTab.defaultProps = {
  theme: light
};

export default LabelTab;
