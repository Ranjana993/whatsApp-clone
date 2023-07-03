import { Box, Dialog, styled } from '@mui/material'
import React, { useContext } from 'react'
import { AccountContext } from '../../context/AccountProvider'
import ChatBox from './Chat/ChatBox'
import EmptyChat from './Chat/EmptyChat'
import Menu from './menu/Menu'

const ChatDialog = () => {
const {person} = useContext(AccountContext)

    return (
        <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true} maxWidth={'md'}>
            <Components>
                <LeftComponent>
                    <Menu />
                </LeftComponent>
                <RightComponent>
                    {
                        Object.keys(person).length ? <ChatBox /> : <EmptyChat />
                    }
                </RightComponent>
            </Components>
        </Dialog>
    )
}

export default ChatDialog
const dialogStyle = {
    height: "96%",
    margin: '20px',
    width: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    boxShadow: "none",
    overflow: "hidden",
    borderRadius: 0,
}
const Components = styled(Box)`
    display: flex;
`
const LeftComponent = styled(Box)`
    min-width: 450px;
`
const RightComponent = styled(Box)`
    width: 73%;
    min-width: 300px;
    height:100%;
    border-left: 1px solid rgba(0,0,0, 0.14);
`