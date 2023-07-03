import { Box, Drawer, styled, Typography } from '@mui/material'
import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Profile from './Profile';

const drawerStyle = {
    left: 20,
    top: 17,
    height: '95%',
    width: "30%",
    boxShadow: "none"
}




const InfoDrawer = ({ open, setOpen }) => {
    return (
        <Drawer
            open={open}
            onClose={() => setOpen(false)}
            PaperProps={{ sx: drawerStyle }}
            style={{ zIndex: 1500 }}
        >
            <Box>
                <Header>
                    <KeyboardBackspaceIcon onClick={() => setOpen(false) }/>
                    <Typography>Profile</Typography>
                </Header>
                <Component>
                    <Profile />
                </Component>
            </Box>
        </Drawer>
    )
}

export default InfoDrawer;
const Header = styled(Box)`
    background-color: #008069;
    height: 107px;
    color: #ffffff;
    display: flex;
    &>svg , &>p{
        margin-top: auto;
        padding: 15px;
        font-weight: 600;
    }
`

const Component = styled(Box)`
background-color: #ededed;
height: 85%;

`