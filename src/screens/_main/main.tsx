import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import RNBootSplash from 'react-native-bootsplash'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components/native'

import { App } from '@screens/app'

import { persistor, store } from '@store/store'

import { THEME } from '@theme/colors'

export const Main = () => {
  useEffect(() => {
    RNBootSplash.hide({ fade: true })
  }, [])

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={THEME}>
          <StatusBar barStyle='light-content' backgroundColor={THEME.background} />
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}
