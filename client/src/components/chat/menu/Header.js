import { Box, styled } from '@mui/material';
import React, { useContext, useState } from 'react'
import { AccountContext } from '../../../context/AccountProvider';
import ChatIcon from '@mui/icons-material/Chat';
import HeaderMenu from './HeaderMenu';
import InfoDrawer from '../../Drawer/InfoDrawer';

const Header = () => {
    const { account } = useContext(AccountContext)
    const [openDrawer, setOpenDrawer] = useState(false)

    const toggleDrawer = () => setOpenDrawer(true)
    

    return (<>
        <Component>
            <Image src={account.picture} onClick={() => toggleDrawer()} alt="dp" />
            <Wrapper>
                <ChatIcon />
                <HeaderMenu setOpenDrawer={setOpenDrawer} />
            </Wrapper>
        </Component>
        <InfoDrawer open={openDrawer} setOpen = {setOpenDrawer}/>
    </>
    )
}

export default Header;
const Component = styled(Box)`
    height: 44px;
    background-color: #edededed;
    padding: 8px 16px;
    display: flex;
    align-items: center;
`
const Wrapper = styled(Box)`
    margin-left: auto;
    & > *{
        margin-left: 2px;
        padding: 8px;
        color: #000;
    };
    &:first-child{
        font-size: 22px;
        margin-right: 8px;
        margin-top: 3px;
    }
`
const Image = styled('img')({
    height: 40,
    width: 40,
    borderRadius: '50%'
})