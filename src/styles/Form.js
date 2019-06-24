import styled from 'styled-components';
import { light } from './Theme';

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
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export const FormAlt = styled(Form)`
  padding: 1rem;
`;

export const Fieldset = styled.fieldset`
  padding: 1rem;
  flex: 1 1 100%;
  border: none;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

export const CategoryMenu = styled.form`
  display: flex;
  flex-flow: row wrap;
  text-transform: uppercase;
  width: 100%;
  justify-content: center;
`;

export const InputRadio = styled.input`
  opacity: 0;
`;

export const LabelTab = styled.label`
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

export const LabelSpan = styled.span`
  position: relative;
  z-index: 100;
`;

LabelTab.defaultProps = {
  theme: light
};

export const LabelSelect = styled(LabelTab)`
  display: flex;
  flex-flow: row wrap;
  align-content: center;
  align-items: center;
  justify-content: center;
  margin: 2rem auto;
  max-width: 80%;
  padding: 0.7rem 2.5rem;
  text-transform: uppercase;

  @media screen and (min-width: 30rem) {
    max-width: 28rem;
    flex: 1 1 100%;
  }
`;

export const Select = styled.select`
  background: ${props => props.theme.bgAdd};
  color: ${props => props.theme.color};
  box-shadow: ${props => props.theme.shadow};
  border: none;
  padding: 0.5rem 0;
  margin: 0.5rem;
  font-size: 1.3rem;
  appearance: none;
  text-transform: uppercase;
  text-align: center;

  @media screen and (min-width: 40rem) {
    margin: 0.15rem 0 0 1rem;
  }
`;

export const Option = styled.option`
  font-size: 1.2rem;
  text-transform: uppercase;
  line-break: loose;
  text-align: center;
`;
