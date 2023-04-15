import React from 'react'
import Header from './Header'

import { useDispatch } from 'react-redux'
import { closeSubMenu } from '../../store'
const Layout = ({ children }) => {
    const dispatch = useDispatch()
    return (
        <div>
            <Header />
            <div
                onMouseOver={() => {
                    dispatch(closeSubMenu())
                }}
                style={{ minHeight: '100vh' }}
            >
                {children}
            </div>
        </div>
    )
}

export default Layout
