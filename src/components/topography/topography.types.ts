import { PropsWithChildren } from 'react'
import { StyleProp, TextProps, TextStyle } from 'react-native'

import { FONTS } from '@theme/fonts'

export interface CommonTopographyProps extends StyledTopographyProps, TextProps, PropsWithChildren {
  style?: StyleProp<TextStyle>
  numberOfLines?: number
}

export interface StyledTopographyProps {
  color?: string
  fontSize?: number
}

interface DefaultFont {
  family: typeof FONTS.default.name
  weight: keyof typeof FONTS.default.weight
}
interface PancettaFont {
  family: typeof FONTS.pancetta.name
  weight: keyof typeof FONTS.pancetta.weight
}

//Strongly typed fonts
export type TopographyProps =
  | (CommonTopographyProps & DefaultFont)
  | (CommonTopographyProps & PancettaFont)
