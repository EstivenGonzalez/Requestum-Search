import { createSlice } from '@reduxjs/toolkit'

import { historyInitialState } from './history.constants'

export const historySlice = createSlice({
  name: 'history',
  initialState: historyInitialState,
  reducers: {},
})

const { actions, reducer } = historySlice
export const {} = actions
export { reducer as historyReducer }
