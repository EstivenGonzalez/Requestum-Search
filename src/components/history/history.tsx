import React from 'react'

import { useAppSelector } from '@hooks/redux'

import { DEVICE_WIDTH } from '@constants/device'
import { APP_SPACE } from '@theme/constants'

import { StyledHistory as Styled } from './history.styles'

const HISTORY_ITEM_MAX_WIDTH = DEVICE_WIDTH - APP_SPACE * 2

export const History: React.FC = React.memo(() => {
  const history = useAppSelector((store) => store.history)

  if (!history.length) {
    return null
  }

  return (
    <Styled.History>
      <Styled.Title color='white' weight={500}>
        Search history:
      </Styled.Title>

      {history.map((historyTerm) => (
        <Styled.HistoryTerm
          key={historyTerm}
          color='white'
          weight={500}
          numberOfLines={1}
          maxWidth={HISTORY_ITEM_MAX_WIDTH}>
          {historyTerm}
        </Styled.HistoryTerm>
      ))}
    </Styled.History>
  )
})
