import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { light } from "./theme";

export const GlobalStyle = createGlobalStyle`
   body {
     margin: 0;
     font-family: "Noto Sans HK", sans-serif;
     background: ${props => props.theme.bg};
   }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  position: sticky;
  top: 0;
  background: ${props => props.theme.bgAdd};
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 2px 6px 2px rgba(60, 64, 67, 0.15);
  padding: env(safe-area-inset-top) env(safe-area-inset-right) 0
    env(safe-area-inset-left);
`;

Header.defaultProps = {
  theme: light
};

export const Link = styled(RouterLink)`
  color: ${props => props.theme.color};
  text-decoration: none;
  font-size: ${props => props.fontSize};
  font-family: "Noto Sans HK", sans-serif;
  padding: 0.5rem;
`;

Link.defaultProps = {
  theme: light,
  fontSize: "1.3rem"
};

export const HeaderLink = styled(Link)`
  font-size: 2rem;
  font-weight: 700;
  margin: 0.5rem;
`;

export const Nav = styled.nav`
  transition: opacity 0.2s ease-in-out;
  opacity: ${props => (props.hide ? "0" : "1.0")};
  position: fixed;
  top: 3.9rem;
  left: 0;
  z-index: 100;
  width: 100%;
  background: ${props => props.theme.bgAdd};
  box-shadow: 0 3px 6px 0 rgba(104, 104, 104, 0.5);
  padding: 0.7rem 0;

  @media screen and (min-width: 40rem) {
    top: 1rem;
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

  @media screen and (min-width: 40rem) {
    justify-content: flex-end;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  border: 0;
  font-size: 1.2rem;
  text-transform: uppercase;
  background: ${props => props.theme.bgAdd};
`;

export const ButtonMain = styled(Button)`
  padding: 1rem;
  margin: auto;
  box-shadow: ${props => props.theme.shadow};
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

export const MainHeader = styled.header`
  padding: 1rem;
`;

export const Main = styled.main`
  padding: env(safe-area-inset-top) env(safe-area-inset-right)
    env(safe-area-inset-bottom) env(safe-area-inset-left);
  background: ${props => props.theme.bg};
  color: ${props => props.theme.color};
  display: flex;
  flex-flow: column nowrap;
  text-align: center;
`;

Main.defaultProps = {
  theme: light
};

export const LinkA = styled.a`
  cursor: pointer;
  display: block;
  color: ${props => props.theme.color};
  text-decoration: none;
  font-size: 1.2rem;
  font-family: "Noto Sans HK", sans-serif;
`;

LinkA.defaultProps = {
  theme: light
};

export const H1 = styled.h1`
  margin: 2.5rem 0 1rem 0;
`;

export const Content = styled.div`
  background: transparent;

  @media screen and (min-width: 40rem) {
    margin: 0 1.5rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }
`;

export const Article = styled.article`
  display: flex;
  flex-flow: column nowrap;
  background: linear-gradient(
    135deg,
    ${props => props.theme.bgAdd} 0%,
    ${props => props.theme.bgAdd} 57%,
    ${props => props.bg} 57%
  );
  box-shadow: ${props => props.theme.shadow};
  word-break: break-word;
  color: ${props => props.theme.color};
  padding: 0.3rem 1.2rem;
  margin: 2rem 1rem;
  min-height: 21rem;
  text-align: left;

  @media screen and (min-width: 40rem) {
    background: linear-gradient(
      145deg,
      ${props => props.theme.bgAdd} 0%,
      ${props => props.theme.bgAdd} 57%,
      ${props => props.bg} 57%
    );
    margin: ${props => props.margin};
    min-height: 10rem;
    min-width: 16.5rem;
    flex: 1 1 25%;
  }
`;

Article.defaultProps = {
  theme: light,
  bg: "#fff",
  margin: "2.5rem 1.5rem"
};

export const H2 = styled.h2`
  font-size: 1.7rem;
  margin: 1rem 0 0.2rem 0;
`;

export const Span = styled.span`
  color: ${props => props.theme.colorAdd};
  font-size: 1.3rem;
  font-weight: 400;
`;

Span.defaultProps = {
  theme: light
};

export const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  margin: 0;
  padding: 0;
  width: 60%;
  list-style-type: none;
`;

export const ListItem = styled.li`
  color: ${props => props.theme.colorAdd};
  padding: 0.5rem 1rem 0 0;
`;

export const P = styled.p`
  width: 65%;
`;

export const Pr = styled.div`
  text-align: right;
  margin: auto 0 0 auto;
  color: #000;
`;

export const Footer = styled.footer`
  margin: 1rem;
  padding: 0.5rem;
  text-align: center;
  background: ${props => props.theme.bg};
  color: ${props => props.theme.color};
`;

Footer.defaultProps = {
  theme: light
};
