import styled from 'styled-components';
import { light } from './Theme';

export const oppositeBg = props => (props.bg ? props.bg : props.theme.color);

const Article = styled.article`
  display: flex;
  margin: 2rem 1rem;
  min-height: 13rem;
  padding: 1.2rem 1.2rem 0.8rem 1.2rem;
  flex-flow: column nowrap;
  background: linear-gradient(
    ${props => props.theme.bgAdd} 0%,
    ${props => props.theme.bgAdd} 0.3rem,
    ${props => oppositeBg(props)} 0.3rem,
    ${props => oppositeBg(props)} 0.6rem,
    ${props => props.theme.bgAdd} 0.6rem
  );
  box-shadow: ${props => props.theme.shadow};
  border-radius: 0.5rem;
  text-align: left;
  word-break: break-word;

  @media screen and (min-width: 40rem) {
    min-width: 16.5rem;
    margin: 1.5rem 1rem;
    flex: 1 0 27%;
  }
`;

Article.defaultProps = {
  theme: light
};

export default Article;
