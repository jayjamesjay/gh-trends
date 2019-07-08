import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-flow: column;
  align-content: center;
  align-items: center;
  padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom)
    env(safe-area-inset-left);
  text-align: center;
`;

export const Content = styled.div`
  @media screen and (min-width: 40rem) {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    margin: 0 1.5rem;
  }
`;

export const Bar = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const BottomBar = styled(Bar)`
  margin: auto 0 0 0;
`;
