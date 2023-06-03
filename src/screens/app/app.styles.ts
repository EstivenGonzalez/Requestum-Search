import styled from 'styled-components/native'

import { APP_SPACE } from '@theme/constants'

export const StyledApp = {
  App: styled.View`
    padding: ${APP_SPACE}px;
    flex: 1;
    background-color: ${({ theme }) => theme.background};
  `,
}
