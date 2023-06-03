import React, { FC } from 'react'
import { SvgProps } from 'react-native-svg'

import { ICON_MAP } from './icon.map'

import { IIconProps } from './icon.types'

import { StyledIcon } from './icon.styles'

export const Icon: FC<IIconProps> = (props) => {
  const { type, size, style, height, width, color } = props

  const SelectedIcon = ICON_MAP[type]
  const iconProps = SelectedIcon({})?.props as SvgProps

  const iconHeight = size ?? height ?? iconProps.height
  const iconWidth = size ?? width ?? iconProps.width
  const iconSize = { height: iconHeight, width: iconWidth }

  return (
    <StyledIcon style={[iconSize, style]}>
      <SelectedIcon fill={color} color={color} style={iconSize} />
    </StyledIcon>
  )
}
