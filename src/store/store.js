import { configureStore } from '@reduxjs/toolkit'
import linksSlice from './linksSlice'

export const store = configureStore({
    reducer: {
        link : linksSlice,
    },
})