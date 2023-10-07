import { createSlice } from '@reduxjs/toolkit'

export const linkSlice = createSlice({
  name: 'linkSlice',
  initialState: {
    links: [],
    title:""
  },
  reducers: {
    getLinks: (state , action) => {
        state.links = action.payload;
    },
    getTitle: (state , action) => {
      state.title = action.payload;
  },
  },
})

// Action creators are generated for each case reducer function
export const { getLinks , getTitle } = linkSlice.actions

export default linkSlice.reducer