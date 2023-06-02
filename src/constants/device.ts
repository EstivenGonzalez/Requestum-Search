import { Dimensions, Platform } from 'react-native'

export const isAndroid = Platform.OS === 'android'
export const isIOS = Platform.OS === 'ios'

export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window')

export const REFERENCE_SCALE = Math.min(DEVICE_WIDTH / 428, DEVICE_HEIGHT / 926)
