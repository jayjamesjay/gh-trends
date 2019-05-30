import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { light } from "./theme";

export const GlobalStyle = createGlobalStyle`
   body {
     margin: 0;
     font-family: "Noto Sans HK", sans-serif;
   }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  position: sticky;
  top: 0%;
  background: ${props => props.theme.bg};
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 2px 6px 2px rgba(60, 64, 67, 0.15);
`;

Header.defaultProps = {
  theme: light
};

export const HeaderTitle = styled.h1`
  font-size: 2.2rem;
  margin: 1rem 0.5rem;
`;

export const Link = styled(RouterLink)`
  color: ${props => props.theme.color};
  text-decoration: none;
  font-size: ${props => props.fontSize};
  font-family: "Noto Sans HK", sans-serif;
  padding: 0.5rem;
`;

Link.defaultProps = {
  theme: light,
  fontSize: "1.5rem"
};

export const Nav = styled.nav`
  transition: opacity 0.2s ease-in-out;
  opacity: ${props => (props.hide ? "0" : "1.0")};
  position: fixed;
  top: 5rem;
  left: 0;
  z-index: 100;
  width: 100%;
  background: ${props => props.theme.bg};
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3);
  padding: 1rem 0;

  @media (min-width: 40rem) {
    top: 0.5rem;
    left: 47%;
    width: 50%;
    opacity: 1;
    box-shadow: none;
  }
`;

Nav.defaultProps = {
  theme: light,
  hide: true
};

export const Menu = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  text-transform: uppercase;
  list-style-type: none;
  margin: 0;
  padding: 0;

  @media (min-width: 40rem) {
    justify-content: flex-end;
  }
`;

export const MenuToggle = styled.button`
  overflow: hidden;
  cursor: pointer;
  background: transparent;
  margin: 0 1rem;
  padding: 0;
  border: 0;

  @media (min-width: 40rem) {
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
      transform: ${props =>
        props.open ? "rotate(-45deg) translate(-0.35rem, 0.35rem)" : ""};
    }

    &:nth-child(2) {
      transform: ${props => (props.open ? "translateX(15rem)" : "")};
    }

    &:last-child {
      transform: ${props =>
        props.open ? "rotate(45deg) translate(-0.35rem, -0.35rem)" : ""};
    }
  }
`;

MenuToggle.defaultProps = {
  theme: light,
  open: true
};

export const Main = styled.main`
  padding: 0.5rem;
  background: ${props => props.theme.bg};
  color: ${props => props.theme.color};
`;

Main.defaultProps = {
  theme: light
};

export const Article = styled.article`
  background: transparent;
  color: ${props => props.theme.color};
`;

Article.defaultProps = {
  theme: light
};

export const Footer = styled.footer`
  padding: 0.5rem;
  text-align: center;
  background: ${props => props.theme.bg};
  color: ${props => props.theme.color};
`;

Footer.defaultProps = {
  theme: light
};
