import { createSlice } from '@reduxjs/toolkit'

const headerSlice = createSlice({
    name: 'header',
    initialState: {
        subMenuOpen: false,
    },
    reducers: {
        toggleSubMenu(state) {
            state.subMenuOpen = !state.subMenuOpen
        },
        openSubMenu(state) {
            state.subMenuOpen = true
        },
        closeSubMenu(state) {
            state.subMenuOpen = false
        },
    },
})

export const { toggleSubMenu, openSubMenu, closeSubMenu } = headerSlice.actions

export default headerSlice.reducer
