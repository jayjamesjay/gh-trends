import styled from 'styled-components';
import { light } from './Theme';

export const oppositeBg = props => (props.bg ? props.bg : props.theme.color);

const Article = styled.article`
  display: flex;
  min-height: 21rem;
  margin: 2rem 1rem;
  padding: 1.2rem;
  flex-flow: column nowrap;
  background: linear-gradient(
    ${props => props.theme.bgAdd} 0%,
    ${props => props.theme.bgAdd} 0.3rem,
    ${props => oppositeBg(props)} 0.3rem,
    ${props => oppositeBg(props)} 0.6rem,
    ${props => props.theme.bgAdd} 0.6rem
  );
  box-shadow: ${props => props.theme.shadow};
  text-align: left;
  word-break: break-word;

  @media screen and (min-width: 40rem) {
    min-height: 10rem;
    min-width: 16.5rem;
    margin: ${props => props.margin};
    flex: 1 1 27%;
  }
`;

Article.defaultProps = {
  theme: light,
  margin: '2.5rem 1.5rem'
};

export default Article;
