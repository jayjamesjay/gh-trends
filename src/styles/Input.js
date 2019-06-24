import styled from 'styled-components';

const TextInput = styled.input`
  background: ${props => props.theme.bg};
  color: ${props => props.theme.color};
  padding: 0.5rem;
  font-size: 1.2rem;
  border: none;
  border: solid ${props => props.theme.color};
  border-width: 0 0 0.15rem 0;
  min-width: 50%;

  &:focus {
    border-width: 0.15rem;
  }
`;

export const InputRadio = styled.input`
  opacity: 0;
`;

export default TextInput;
