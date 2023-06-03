import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const MAX_HISTORY_COUNT = 5

export const historySlice = createSlice({
  name: 'history',
  initialState: [] as string[],
  reducers: {
    addToHistory: (history, { payload }: PayloadAction<string>) => {
      const newTerm = payload.trim()

      const similarTermIndex = history.findIndex(
        (historyTerm) => historyTerm.toLowerCase() === newTerm.toLowerCase(),
      )

      if (similarTermIndex >= 0) {
        history.splice(similarTermIndex, 1)
        history.unshift(newTerm)
        return
      }

      if (history.length >= MAX_HISTORY_COUNT) {
        history.pop()
      }

      history.unshift(newTerm)
    },
  },
})

const { actions, reducer } = historySlice
export const { addToHistory } = actions
export { reducer as historyReducer }
