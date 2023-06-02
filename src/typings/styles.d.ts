import 'styled-components/native'

import { ThemeType } from '@theme/colors'

declare module 'styled-components/native' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}
