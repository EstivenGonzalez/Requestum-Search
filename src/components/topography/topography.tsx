import React, { FC } from 'react'

import { TTopographyProps } from './topography.types'

import { StyledTopography } from './topography.styles'

import { FONTS } from '@theme/fonts'

export const Topography: FC<TTopographyProps> = (props) => {
  const {
    weight = 400,
    family,
    fontSize,
    children,
    style,
    color = 'black',
    isCentered,
    maxWidth,
    ...textProps
  } = props

  return (
    <StyledTopography
      isCentered={isCentered}
      maxWidth={maxWidth}
      fontSize={fontSize}
      color={color}
      maxFontSizeMultiplier={1}
      allowFontScaling={false}
      style={[{ fontFamily: family, fontWeight: FONTS.default.weight[weight] }, style]}
      {...textProps}>
      {children}
    </StyledTopography>
  )
}
