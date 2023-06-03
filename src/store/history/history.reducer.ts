import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const MAX_HISTORY_COUNT = 5

export const historySlice = createSlice({
  name: 'history',
  initialState: [] as string[],
  reducers: {
    addToHistory: (history, { payload }: PayloadAction<string>) => {
      if (!payload.trim()) {
        return
      }

      const similarTermIndex = history.findIndex((historyTerm) => historyTerm === payload)

      if (similarTermIndex >= 0) {
        history.splice(similarTermIndex, 1)
        history.unshift(payload)
        return
      }

      if (history.length >= MAX_HISTORY_COUNT) {
        history.pop()
      }

      history.unshift(payload)
    },
  },
})

const { actions, reducer } = historySlice
export const { addToHistory } = actions
export { reducer as historyReducer }
