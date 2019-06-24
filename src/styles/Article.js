import styled from 'styled-components';
import { light, dark } from './Theme';

const Article = styled.article`
  display: flex;
  flex-flow: column nowrap;
  background: linear-gradient(
    ${props => props.theme.bgAdd} 0%,
    ${props => props.theme.bgAdd} 0.3rem,
    ${props => (props.bg ? props.bg : props.theme.bg === light.bg ? dark.bg : light.bg)} 0.3rem,
    ${props => (props.bg ? props.bg : props.theme.bg === light.bg ? dark.bg : light.bg)} 0.6rem,
    ${props => props.theme.bgAdd} 0.6rem
  );
  box-shadow: ${props => props.theme.shadow};
  word-break: break-word;
  padding: 1.2rem;
  margin: 2rem 1rem;
  min-height: 21rem;
  text-align: left;

  @media screen and (min-width: 40rem) {
    margin: ${props => props.margin};
    min-height: 10rem;
    min-width: 16.5rem;
    flex: 1 1 25%;
  }
`;

Article.defaultProps = {
  theme: light,
  margin: '2.5rem 1.5rem'
};

export default Article;
