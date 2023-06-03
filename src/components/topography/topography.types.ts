import { PropsWithChildren } from 'react'
import { StyleProp, TextProps, TextStyle } from 'react-native'

import { Color } from '@theme/colors'
import { FONTS } from '@theme/fonts'

interface ICommonTopographyProps extends IStyledTopographyProps, TextProps, PropsWithChildren {
  style?: StyleProp<TextStyle>
}

export interface IStyledTopographyProps {
  color?: Color
  fontSize?: number
  maxWidth?: number
  isCentered?: boolean
}

interface IDefaultFont {
  family?: typeof FONTS.default.name
  weight?: keyof typeof FONTS.default.weight
}
interface IPancettaFontRegular {
  family?: typeof FONTS.pancettaSemiBold.name
  weight?: never
}
interface IPancettaFontSemiBold {
  family?: typeof FONTS.pancettaRegular.name
  weight?: never
}

//Strongly typed fonts
export type TTopographyProps =
  | (ICommonTopographyProps & IDefaultFont)
  | (ICommonTopographyProps & IPancettaFontRegular)
  | (ICommonTopographyProps & IPancettaFontSemiBold)
