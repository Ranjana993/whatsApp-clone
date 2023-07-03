import { Dialog, Box, Typography, styled } from '@mui/material';
import React, { useContext } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from 'jwt-decode';
import { AccountContext } from '../../context/AccountProvider';
import { addUsers } from '../../Service/api';

const Logindialog = () => {
    const { setAccount } = useContext(AccountContext)

    const onLoginSuccessful = async (res) => {
        const decode = jwt_decode(res.credential);
        // console.log(decode);
        setAccount(decode);
        await addUsers(decode)
    }

    const onLoginError = (err) => {
        console.log(err);
    }

    return (
        <Dialog open={true} PaperProps={{ sx: dialogStyle }}
            hideBackdrop={true}>
            <Components>
                <Container>
                    <Title>To use WhatsApp in Your Computer :</Title>
                    <StyledList>
                        <ListItem>1. Open WhatsApp on your computer</ListItem>
                        <ListItem>2. Open menu settings and select WhatsApp web</ListItem>
                        <ListItem>3. Point Your phone to this screen to capture the code </ListItem>
                    </StyledList>
                </Container>
                <Box style={{ position: 'relative' }}>
                    <Qrcode src="https://i.stack.imgur.com/Qoz3Il.jpg" alt="bar code" />
                    <Box style={{ position: 'absolute', top: "50%", transform: "translateX(25%)" }}>
                        <GoogleLogin
                            onSuccess={onLoginSuccessful}
                            onError={onLoginError}
                        />
                    </Box>
                </Box>
            </Components>
        </Dialog>
    )
}
export default Logindialog;
const dialogStyle = {
    height: "96%",
    marginTop: "12%",
    width: "60%",
    maxWidth: "100%",
    maxHeight: "100%",
    boxShadow: "none",
    overflow: "hidden"
}
const Container = styled(Box)`
    padding: 56px 0 56px 56px;
`
const Components = styled(Box)`
    display: flex;
`
const Qrcode = styled('img')({
    height: 264,
    width: 264,
    margin: '50px 0 0 50px'
})
const Title = styled(Typography)`
    font-size: 26px;
    color: #525252;
    font-weight: 200;
    font-family: inherit;
    margin-bottom:25px ;
`
const StyledList = styled(List)`
    &>li{
        padding: 0;
        margin-top: 15px;
        font-size: 18px;
        line-height: 28px;
        color: #4a4a4a;
}
`