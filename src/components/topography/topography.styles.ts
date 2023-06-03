import styled from 'styled-components/native'

import { REFERENCE_SCALE } from '@constants/device'

import { IStyledTopographyProps } from './topography.types'

import { THEME } from '@theme/colors'

export const StyledTopography = styled.Text<IStyledTopographyProps>`
  font-size: ${({ fontSize = 17 }) => fontSize * REFERENCE_SCALE}px;
  ${({ color }) => color && `color: ${THEME[color]}`};
`
