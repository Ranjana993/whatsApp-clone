import React, { useContext, useEffect, useState } from 'react'
import { getUser } from '../../../Service/api'
import { Box, styled } from "@mui/material"
import UserConversation from './UserConversation'
import { AccountContext } from '../../../context/AccountProvider'
import Divider from '@mui/material/Divider';



const Conversation = ({ text }) => {
    const { account, socket, setActiveUsers } = useContext(AccountContext)
    const [users, setUserData] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            let response = await getUser()
            const filterData = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()))
            setUserData(filterData);
        }
        fetchData()
    }, [text])


    useEffect(() => {
        socket.current.emit('addUser', account)
        socket.current.on('getUsers', users => {
            setActiveUsers(users)
        })
    }, [account])



    return (
        <Component>
            {
                users.map(user => (
                    user.sub !== account.sub &&
                    <>
                        <UserConversation user={user} />
                        <StyledDivider />
                    </>
                ))
            }
        </Component>
    )
}

export default Conversation;
const Component = styled(Box)`
    height: 81vh;
    overflow: overlay;
`
const StyledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background-color:#e9edef;
    opacity: .6;
`