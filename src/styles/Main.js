import styled from 'styled-components';
import { light } from './Theme';

export const Main = styled.main`
  padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom)
    env(safe-area-inset-left);
  justify-content: center;
  text-align: center;
`;

export const Content = styled.section`
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
  padding: 1.2rem;
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
  bg: '#fff',
  margin: '2.5rem 1.5rem'
};

export const Span = styled.span`
  color: ${props => props.theme.colorAdd};
  font-size: 1.3rem;
  font-weight: 400;
`;

Span.defaultProps = {
  theme: light
};

export const CategoryMenu = styled.section`
  display: flex;
  flex-flow: row wrap;
  text-transform: uppercase;
  width: 100%;
  justify-content: center;
`;

export const TextBlock = styled.div`
  text-align: right;
  margin: auto 0 0 auto;
  color: #000;
`;
