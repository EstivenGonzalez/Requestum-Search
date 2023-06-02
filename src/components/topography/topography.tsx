import React, { FC } from 'react'

import { TopographyProps } from './topography.types'

import { StyledTopography } from './topography.styles'

import { FONTS } from '@theme/fonts'

export const Topography: FC<TopographyProps> = (props) => {
  const { weight = 400, family, fontSize, children, style, color, ...textProps } = props

  return (
    <StyledTopography
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
