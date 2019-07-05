import styled from 'styled-components';
import { light } from './Theme';

const TextInput = styled.input`
  min-width: 50%;
  padding: 0.5rem;
  background: ${props => props.theme.bg};
  border: solid ${props => props.theme.color};
  border-width: 0 0 0.15rem 0;
  font-size: 1.2rem;
  color: ${props => props.theme.color};

  &:focus {
    border-width: 0.15rem;
  }
`;

TextInput.defaultProps = {
  theme: light
};

export const InputRadio = styled.input`
  opacity: 0;
`;

export default TextInput;
