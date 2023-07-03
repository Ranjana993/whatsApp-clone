import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material';

const HeaderMenu = ({setOpenDrawer }) => {
    const [open, setOpen] = useState(false)

    const handleClose = () => {
        setOpen(false)
    }
    const handleClick = (e) => {
        setOpen(e.currentTarget)
    }

    return (
        <>
            <MoreVertIcon onClick={handleClick} />
            <Menu
                anchorEl={open}
                open={open}
                keepMounted
                onClose={handleClose}
                getContentAnchorE1 = {null}
                anchorOrigin={{
                    vertical:'bottom',
                    horizontal:"center"
                }}
                transformOrigin={{
                    vertical:'top',
                    horizontal:"right"
                }}
            >
                <MenuOption onClick={() => { handleClose(); setOpenDrawer(true);}}>Profile</MenuOption>
            </Menu>
        </>
    )
}

export default HeaderMenu

const MenuOption = styled(MenuItem)`
font-size: 14px;
padding: 15px 60px 5px 24px;
color: #4A4A4A;
`