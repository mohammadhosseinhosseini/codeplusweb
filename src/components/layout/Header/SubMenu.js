import React from 'react'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'

const SubMenu = ({ isPhone }) => {
    const { isSubMenuOpen } = useSelector((state) => {
        return {
            isSubMenuOpen: state.header.subMenuOpen,
        }
    })
    return (
        <motion.div
            className='sub-menus'
            // layout
            initial={{
                height: '0px',
                opacity: 0,
                marginTop: 0,
            }}
            animate={
                isSubMenuOpen
                    ? {
                          height: 'auto',
                          opacity: 1,
                          marginTop: isPhone ? '1rem' : '0',
                      }
                    : {
                          height: '0px',
                          opacity: 0,
                          marginTop: 0,
                      }
            }
            // transition={{ ease: 'easeOut', duration: 0.5 }}
            transition={{
                delay: isSubMenuOpen ? 0 : 0.5,
                duration: 0.5,
            }}
        >
            <motion.div
                className='sub-menus-content py-5 container'
                animate={
                    isSubMenuOpen
                        ? {
                              opacity: 1,
                          }
                        : {
                              opacity: 0,
                          }
                }
                transition={{ delay: isSubMenuOpen ? 0.4 : 0 }}
            >
                Hello!
            </motion.div>
        </motion.div>
    )
}

export default SubMenu
