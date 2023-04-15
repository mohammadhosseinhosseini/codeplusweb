import React, { useState, useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, Variants } from 'framer-motion'
import {
    useWindowSize,
    useWindowWidth,
    useWindowHeight,
} from '@react-hook/window-size'

import { useSelector, useDispatch } from 'react-redux'
import { closeSubMenu, openSubMenu, toggleSubMenu } from '../../store'

import './dist/Header.css'
import SubMenu from './Header/SubMenu'

const Header = () => {
    const dispatch = useDispatch()
    const [showNavbar, setShowNavbar] = useState(false)
    const width = useWindowWidth()
    const isPhone = width < 768

    const { isSubMenuOpen } = useSelector((state) => {
        return {
            isSubMenuOpen: state.header.subMenuOpen,
        }
    })

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (
        <nav className='mynavbar'>
            <div className='nav-container'>
                <div className='logo'>{/* <Brand /> */}</div>
                <div className='menu-icon' onClick={handleShowNavbar}>
                    <i className='fa-solid fa-bars' />
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li>
                            <NavLink
                                to='/'
                                onMouseOver={() => {
                                    dispatch(closeSubMenu())
                                }}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <div
                                onMouseOver={() => {
                                    dispatch(openSubMenu())
                                }}
                            >
                                <NavLink to='/services'>Services</NavLink>
                                <motion.i
                                    className={`fa-solid fa-chevron-down ms-3`}
                                    onClick={() => {
                                        dispatch(toggleSubMenu())
                                    }}
                                    animate={
                                        isSubMenuOpen
                                            ? {
                                                  rotate: 180,
                                              }
                                            : {
                                                  rotate: 0,
                                              }
                                    }
                                    transition={{ duration: 0.3 }}
                                />
                            </div>

                            {isPhone && <SubMenu isPhone />}

                            {/* {isPhone && (
                                <motion.div
                                    className='sub-menus'
                                    data-isopen={isOpen}
                                    layout
                                >
                                    <div className='sub-menus-content'>
                                        Hello
                                    </div>
                                </motion.div>
                            )} */}
                        </li>
                        <li>
                            <NavLink
                                to='/blog'
                                onMouseOver={() => {
                                    dispatch(closeSubMenu())
                                }}
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/about'
                                onMouseOver={() => {
                                    dispatch(closeSubMenu())
                                }}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/contact-us'
                                onMouseOver={() => {
                                    dispatch(closeSubMenu())
                                }}
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            {!isPhone && <SubMenu />}

            {/* <motion.div
                layout
                data-isopen={isOpen}
                initial={{ borderRadius: 50 }}
                className='parent'
                onClick={() => setIsOpen(!isOpen)}
            >
                <motion.div layout className='child' />
            </motion.div> */}
            {/* <motion.nav
                initial={false}
                animate={showSubmenu ? 'open' : 'closed'}
                className='menu'
            >
                <motion.div
                    className='sub-menus'
                    variants={{
                        open: {
                            clipPath: 'inset(0% 0% 0% 0% round 10px)',
                            transition: {
                                type: 'spring',
                                bounce: 0,
                                duration: 0.7,
                                delayChildren: 0.3,
                                staggerChildren: 0.05,
                            },
                        },
                        closed: {
                            clipPath: 'inset(10% 50% 90% 50% round 40px)',
                            transition: {
                                type: 'spring',
                                bounce: 0,
                                duration: 0.3,
                            },
                        },
                    }}
                    style={{ pointerEvents: showSubmenu ? 'auto' : 'none' }}
                    onMouseLeave={() => {
                        setShowSubmenu(false)
                    }}
                >
                    Here
                </motion.div>
            </motion.nav> */}
        </nav>
    )
}

export default Header
