import styled from 'styled-components/native'
import { css } from 'styled-components/native'

import { Topography } from '@components/topography'

const SPACING = 20

const row = css`
  margin-bottom: ${SPACING}px;
`

export const StyledRepository = {
  Repository: styled.View`
    border-radius: 10px;
    background-color: ${({ theme }) => theme.white};
    padding: ${SPACING}px;
  `,
  Name: styled(Topography)`
    ${row}
  `,
  Language: styled(Topography)`
    ${row}
  `,
}
