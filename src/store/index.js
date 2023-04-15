import { configureStore } from '@reduxjs/toolkit'

import headerReducer, {
    toggleSubMenu,
    openSubMenu,
    closeSubMenu,
} from './slices/headerSlice'

const store = configureStore({
    reducer: {
        header: headerReducer,
    },
})

export { store, toggleSubMenu, openSubMenu, closeSubMenu }
