import styled from 'styled-components/native'
import { css } from 'styled-components/native'

import { Topography } from '@components/topography'

const SPACING = 20

const row = css`
  margin-top: ${SPACING}px;
`

export const StyledRepository = {
  Repository: styled.Pressable`
    border-radius: 10px;
    background-color: ${({ theme }) => theme.white};
    padding: ${SPACING}px;
  `,
  Description: styled(Topography)`
    ${row}
  `,
  Language: styled(Topography)`
    ${row}
  `,
}
