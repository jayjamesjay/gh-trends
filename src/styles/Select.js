import styled from 'styled-components';

const Select = styled.select`
  background: ${props => props.theme.bgAdd};
  color: ${props => props.theme.color};
  box-shadow: ${props => props.theme.shadow};
  border: none;
  padding: 0.5rem;
  margin: 0.5rem;
  max-width: 80%;
  font-size: 1.3rem;
  appearance: none;
  text-transform: uppercase;
  text-align: center;
`;

export default Select;
