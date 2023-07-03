import React, { useContext } from 'react';
import { Box, styled } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Logindialog from './accounts/Logindialog'
import { AccountContext } from '../context/AccountProvider';
import ChatDialog from './chat/Dialog';


const Messanger = () => {
    const { account } = useContext(AccountContext)
    return (
        <Components>
            {
                account ?
                    <>
                        <Header>
                            <Toolbar></Toolbar>
                        </Header>
                        <ChatDialog />
                    </> :
                    <>
                        <LoginHeader>
                            <Toolbar></Toolbar>
                        </LoginHeader>
                        <Logindialog />
                    </>
            }

        </Components>
    )
}

export default Messanger;
const Header = styled(AppBar)`
    height: 125px;
    background-color: #00A88A;
    box-shadow: none;
`
const LoginHeader = styled(AppBar)`
    height: 240px;
    background-color: #00bfa5;
    box-shadow: none;
`
const Components = styled(Box)`
    height: 100vh;
    background-color: #dcdcdcdc;

`