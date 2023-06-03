import React, { ComponentType, ReactNode } from 'react'
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native'

const componentStyle = { flex: 1 }

const HideKeyboardHOC = (Comp: ComponentType<any>) => {
  const onPress = () => {
    Keyboard.dismiss()
  }

  return ({ children, ...props }: any & { children: ReactNode; props: any }) => (
    <TouchableWithoutFeedback onPress={onPress} accessible={false}>
      <Comp style={componentStyle} {...props}>
        {children}
      </Comp>
    </TouchableWithoutFeedback>
  )
}
export const HideKeyboardView = HideKeyboardHOC(View)
