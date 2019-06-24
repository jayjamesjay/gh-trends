import styled from 'styled-components';

export const Main = styled.main`
  padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom)
    env(safe-area-inset-left);
  align-content: center;
  align-items: center;
  display: flex;
  flex-flow: column;
  text-align: center;
`;

export const Content = styled.div`
  @media screen and (min-width: 40rem) {
    margin: 0 1.5rem;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }
`;

export const TextBlock = styled.div`
  text-align: right;
  margin: auto 0 0 auto;
`;
