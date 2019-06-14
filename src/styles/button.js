import styled from 'styled-components';
import { light } from './theme';

export const Button = styled.button`
  cursor: pointer;
  border: 0;
  font-size: 1.2rem;
  text-transform: uppercase;
  background: ${props => props.theme.bgAdd};
  color: ${props => props.theme.color};
`;

export const ButtonTheme = styled(Button)`
  background: transparent;
  width: 4rem;
  height: 4rem;
  margin: 0 auto;

  @media screen and (min-width: 40rem) {
    margin: 0 1rem;
  }
`;

export const ButtonMain = styled(Button)`
  padding: 1rem;
  margin: auto;
  box-shadow: ${props => props.theme.shadow};
  visibility: ${props => (!props.visible ? 'hidden' : 'visible')};
`;

export const ButtonIcon = styled.button`
  cursor: pointer;
  border: 0;
  background: transparent;
  width: 2.5rem;
  height: auto;
`;

export const ButtonAdd = styled(ButtonIcon)`
  margin: 0.5rem auto 0 -0.5rem;
`;

export const MenuToggle = styled(Button)`
  padding: 0;
  overflow: hidden;
  background: transparent;
  margin: 0 1rem;

  @media screen and (min-width: 40rem) {
    display: none;
  }

  & > span {
    transition: transform 0.2s linear;
    display: block;
    background: ${props => props.theme.color};
    width: 1.8rem;
    height: 0.2rem;
    margin: 0.3rem 0;

    &:first-child {
      transform: ${props => (props.open ? 'translateY(0.45rem) rotate(-45deg)' : '')};
    }

    &:nth-child(2) {
      transform: ${props => (props.open ? 'translateX(5rem)' : '')};
    }

    &:last-child {
      transform: ${props => (props.open ? 'translateY(-0.45rem) rotate(45deg)' : '')};
    }
  }
`;

MenuToggle.defaultProps = {
  theme: light,
  open: true
};
