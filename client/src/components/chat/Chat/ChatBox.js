import { Box } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { AccountContext } from '../../../context/AccountProvider'
import { getConversation } from '../../../Service/api'
import ChatHeader from './ChatHeader'
import ChatMesage from './ChatMesage'

const ChatBox = () => {
    const { person, account } = useContext(AccountContext)
    const [conversation, setConversation] = useState("")


    useEffect(() => {
        const getConversationDetail = async () => {
            let data = await getConversation({ senderId: account.sub, receiverId: person.sub })
            setConversation(data)
        }
        getConversationDetail();
    }, [person.sub])


    return (
        <Box style={{ height: '75%' }}>
            <ChatHeader person={person} />
            <ChatMesage person={person} conversation={conversation} />
        </Box>
    )
}

export default ChatBox