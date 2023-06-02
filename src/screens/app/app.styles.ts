import styled from 'styled-components/native'

export const StyledApp = {
  App: styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.background};
  `,
}
