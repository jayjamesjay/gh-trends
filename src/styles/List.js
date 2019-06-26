import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  width: 60%;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const ListItem = styled.li`
  padding: 0.5rem 1rem 0 0;
  color: ${props => props.theme.colorAdd};
`;

export const Menu = styled(List)`
  justify-content: space-around;
  width: 100%;
  text-transform: uppercase;

  @media screen and (min-width: 40rem) {
    justify-content: flex-end;
  }
`;
