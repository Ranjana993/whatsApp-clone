import { Box, styled } from '@mui/material'
import React, { useContext, useEffect, useRef, useState } from 'react'
import ChatFooter from './ChatFooter';
import { AccountContext } from '../../../context/AccountProvider';
import { newMessage, getMessage } from '../../../Service/api';
import SingleMessage from './SingleMessage';





const ChatMesage = ({ person, conversation }) => {
    const [value, setValue] = useState("")
    const { account } = useContext(AccountContext)
    const [message, setMessage] = useState([])
    const [newMessageFlag, setNewMessageFlag] = useState(false)
    const [file, setFile] = useState()
    const [image, setImage] = useState()

    const scrollweb = useRef()

    useEffect(() => {
        const getMessages = async () => {
            let data = await getMessage(conversation._id)
            setMessage(data)
        }
        conversation._id && getMessages()
    }, [person._id, conversation._id, newMessageFlag])


    useEffect(() => {
        scrollweb.current?.scrollIntoView({ transition: 'smooth' })
    }, [message])

    const SendText = async (e) => {
        // console.log(e);
        const code = e.keyCode || e.which
        if (code === 13) {
            let message = {};
            if (!file) {
                message = {
                    senderId: account.sub,
                    receiverId: person.sub,
                    conversationId: conversation._id,
                    type: 'text',
                    text: value
                }
            } else {
                message = {
                    senderId: account.sub,
                    receiverId: person.sub,
                    conversationId: conversation._id,
                    type: 'file',
                    text: image
                }
            }
            await newMessage(message)
            setValue("")
            setFile("")
            setImage("")
            setNewMessageFlag(prev => !prev)
        }
    }

    return (
        <Wrapper>
            <Component>
                {
                    message && message.map(message => (
                        <Container ref={scrollweb}>
                            <SingleMessage message={message} />
                        </Container>
                    ))
                }
            </Component>
            <ChatFooter SendText={SendText} setValue={setValue} value={value} file={file} setFile={setFile} setImage={setImage} />
        </Wrapper>
    )
}

export default ChatMesage;


const Wrapper = styled(Box)`
background-image: url(${`https://i.pinimg.com/originals/39/cf/bc/39cfbc81276720ddf5003854e42c2769.jpg`});
background-size: 50%;

`

const Component = styled(Box)`
height:80vh;
overflow-y: scroll;
`
const Container = styled(Box)`
padding: 1px 80px;
`