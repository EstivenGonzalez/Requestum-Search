import { StyleProp, ViewStyle } from 'react-native'

import { ICON_MAP } from './icon.map'

export interface IIconProps {
  type: TIconType
  color?: string
  size?: number
  width?: number
  height?: number
  style?: StyleProp<ViewStyle>
}

export type TIconType = keyof typeof ICON_MAP
