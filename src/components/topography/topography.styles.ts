import styled from 'styled-components/native'

import { REFERENCE_SCALE } from '@constants/device'

import { StyledTopographyProps } from './topography.types'

export const StyledTopography = styled.Text<StyledTopographyProps>`
  font-size: ${({ fontSize = 15 }) => fontSize * REFERENCE_SCALE}px;
  ${({ color }) => color && `color: ${color}`};
`
