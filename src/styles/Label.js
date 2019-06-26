import styled from 'styled-components';
import { light } from './Theme';

const LabelTab = styled.label`
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
    background: ${props => props.theme.bgAdd};
    box-shadow: ${props => props.theme.shadow};
    transition: transform 0.15s ease-in-out;
    transform: translateX(${props => (props.active ? '0%' : '-200%')});
  }
`;

LabelTab.defaultProps = {
  theme: light
};

export default LabelTab;
