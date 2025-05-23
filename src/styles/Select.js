import styled from 'styled-components';
import { light } from './Theme';

const Select = styled.select`
  max-width: 80%;
  margin: 0.5rem;
  padding: 0.5rem;
  background: ${(props) => props.theme.bgAdd};
  border: none;
  border-radius: 0.5rem;
  box-shadow: ${(props) => props.theme.shadow};
  font-family: 'Noto Sans HK', sans-serif;
  font-size: 1.3rem;
  color: ${(props) => props.theme.color};
  text-align: center;
  text-transform: uppercase;
  appearance: none;
`;

Select.defaultProps = {
  theme: light,
};

export default Select;
