import styled from 'styled-components';

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

export const Menu = styled(List)`
  justify-content: space-around;
  text-transform: uppercase;
  width: 100%;

  @media screen and (min-width: 40rem) {
    justify-content: flex-end;
  }
`;
