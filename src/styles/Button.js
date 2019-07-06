import styled from 'styled-components';
import { light } from './Theme';

export const Button = styled.button`
  cursor: pointer;
  background: ${props => props.theme.bgAdd};
  border: 0;
  font-size: 1.2rem;
  color: ${props => props.theme.color};
  text-transform: uppercase;
`;

Button.defaultProps = {
  theme: light
};

export const ButtonTheme = styled(Button)`
  width: 4rem;
  height: 4rem;
  margin: 0 auto;
  background: transparent;

  @media screen and (min-width: 40rem) {
    margin: 0 1rem;
  }
`;

export const ButtonMain = styled(Button)`
  margin: auto;
  padding: 1rem;
  box-shadow: ${props => props.theme.shadow};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
`;

ButtonMain.defaultProps = {
  theme: light
};

export const ButtonIcon = styled.button`
  cursor: pointer;
  width: 2.5rem;
  height: auto;
  background: transparent;
  border: 0;
`;

export const ButtonAdd = styled(ButtonIcon)`
  margin: 0.5rem 0 0 0;
`;

export const MenuToggle = styled(Button)`
  margin: 0 1rem;
  padding: 0;
  background: transparent;
  overflow: hidden;

  @media screen and (min-width: 40rem) {
    display: none;
  }
`;

MenuToggle.defaultProps = {
  theme: light
};

export const ToggleSpan = styled.span`
  display: block;
  width: 1.8rem;
  height: 0.2rem;
  margin: 0.3rem 0;
  background: ${props => props.theme.color};
  transition: transform 0.2s linear;

  &:first-child {
    transform: ${props => (props.open ? 'translateY(0.45rem) rotate(-45deg)' : '')};
  }

  &:nth-child(2) {
    transform: ${props => (props.open ? 'translateX(5rem)' : '')};
  }

  &:last-child {
    transform: ${props => (props.open ? 'translateY(-0.45rem) rotate(45deg)' : '')};
  }
`;

ToggleSpan.defaultProps = {
  theme: light,
  open: true
};
