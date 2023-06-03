import React from 'react'

import { Topography } from '@components/topography'

import { DEVICE_WIDTH } from '@constants/device'

import { IErrorTextProps } from './error-text.types'

import { StyledErrorText as Styled } from './error-text.styles'

const ERROR_TEXT_WIDTH = DEVICE_WIDTH * 0.6

export const ErrorText: React.FC<IErrorTextProps> = React.memo(({ onRetry }) => {
  return (
    <Topography color='tomato' isCentered maxWidth={ERROR_TEXT_WIDTH}>
      Sorry, something went wrong.{' '}
      <Topography color='white'>
        Please,{' '}
        <Styled.Retry color='white' onPress={onRetry}>
          try again
        </Styled.Retry>
      </Topography>
    </Topography>
  )
})
