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
  family?: typeof FONTS.default.name
  weight?: keyof typeof FONTS.default.weight
}
interface PancettaFontRegular {
  family?: typeof FONTS.pancettaSemiBold.name
  weight?: never
}
interface PancettaFontSemiBold {
  family?: typeof FONTS.pancettaRegular.name
  weight?: never
}

//Strongly typed fonts
export type TopographyProps =
  | (CommonTopographyProps & DefaultFont)
  | (CommonTopographyProps & PancettaFontRegular)
  | (CommonTopographyProps & PancettaFontSemiBold)
