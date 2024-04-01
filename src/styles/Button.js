import styled from 'styled-components';
import { light } from './Theme';

export const Button = styled.button`
  cursor: pointer;
  background: ${(props) => props.theme.bgAdd};
  border: 0;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  color: ${(props) => props.theme.color};
  text-transform: uppercase;
`;

Button.defaultProps = {
  theme: light,
};

export const ButtonTheme = styled(Button)`
  width: 3rem;
  height: 3rem;
  margin: 0 auto;
  background: transparent;

  @media screen and (min-width: 40rem) {
    margin: 0 1rem;
  }
`;

export const ButtonMain = styled(Button)`
  margin: auto;
  padding: ${(props) => (props.$visible ? '1rem' : '0')};
  box-shadow: ${(props) => props.theme.shadow};
  width: ${(props) => (props.$visible ? 'auto' : '0')};
  height: ${(props) => (props.$visible ? 'auto' : '0')};
  overflow: ${(props) => (props.$visible ? '' : 'hidden')};
`;

ButtonMain.defaultProps = {
  theme: light,
};

export const ButtonIcon = styled.button`
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: 0;
`;

export const ButtonRemove = styled(ButtonIcon)`
  margin-top: -0.6rem;
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
  theme: light,
};

export const ToggleSpan = styled.span`
  display: block;
  width: 1.8rem;
  height: 0.2rem;
  margin: 0.3rem 0;
  background: ${(props) => props.theme.color};
  transition: transform 0.2s linear;

  &:first-child {
    transform: ${(props) => (props.$open ? 'translateY(0.45rem) rotate(-45deg)' : '')};
  }

  &:nth-child(2) {
    transform: ${(props) => (props.$open ? 'translateX(5rem)' : '')};
  }

  &:last-child {
    transform: ${(props) => (props.$open ? 'translateY(-0.45rem) rotate(45deg)' : '')};
  }
`;

ToggleSpan.defaultProps = {
  theme: light,
  open: true,
};
