import styled from 'styled-components/native'

import { Topography } from '@components/topography'

export const StyledHistory = {
  History: styled.View`
    margin-top: 30px;
    margin-bottom: 50px;
  `,
  Title: styled(Topography)`
    margin-bottom: 20px;
  `,
  HistoryTerm: styled(Topography)`
    line-height: 25px;
  `,
}
