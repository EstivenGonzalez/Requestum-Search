import React from 'react'

import { useAppSelector } from '@hooks/redux'

import { StyledHistory as Styled } from './history.styles'

export const History: React.FC = React.memo(() => {
  const history = useAppSelector((store) => store.history)

  return (
    <Styled.History>
      <Styled.Title color='white' weight={500}>
        Search history:
      </Styled.Title>

      {history.map((historyTerm) => (
        <Styled.HistoryTerm color='white' weight={500} key={historyTerm}>
          {historyTerm}
        </Styled.HistoryTerm>
      ))}
    </Styled.History>
  )
})
