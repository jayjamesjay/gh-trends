import styled from 'styled-components';
import { light } from './theme';

export const TextInput = styled.input`
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

export const Form = styled.form`
  padding: 2rem 0.5rem 0.5rem 0.5rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  flex: 1 1 100%;
`;

export const InputRadio = styled.input`
  opacity: 0;
`;

export const LabelTab = styled.label`
  display: inherit;
  cursor: pointer;
  font-size: 1.3rem;
  padding: 1rem;
  background: ${props => (props.active ? props.theme.bgAdd : props.theme.bg)};
  box-shadow: ${props => (props.active ? props.theme.shadow : '')};
`;

LabelTab.defaultProps = {
  theme: light
};

export const LabelSelect = styled(LabelTab)`
  text-transform: uppercase;
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  align-items: center;
  margin: 2rem auto;
`;

export const Select = styled.select`
  background: ${props => props.theme.bgAdd};
  color: ${props => props.theme.color};
  margin: 0.15rem 0 0 1rem;
  border: none;
  padding: 0.5rem 0;
  font-size: 1.3rem;
  appearance: none;
  text-transform: uppercase;
`;

export const Option = styled.option`
  font-size: 1.2rem;
  text-transform: uppercase;
`;
