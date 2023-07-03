import MoreVert from '@mui/icons-material/MoreVert'
import Search from '@mui/icons-material/Search'
import { Box, styled, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { AccountContext } from '../../../context/AccountProvider'




const ChatHeader = ({ person }) => {
    const { activeUsers } = useContext(AccountContext)
    return (
        <Header>
            <Image src={person.picture} alt="dp" />
            <Box>
                <Name>{person.name}</Name>
                <Status>{activeUsers?.find(user => user.sub === person.sub) ? 'Online' : 'Offline'}</Status>
            </Box>
            <RightContainer>
                <Search />
                <MoreVert />
            </RightContainer>
        </Header>
    )
}

export default ChatHeader;
const Header = styled(Box)`
    height: 44px;
    background-color: #ededed;
    padding: 8px 16px;
    display: flex;
    align-items: center;
`
const Image = styled('img')({
    height: 40,
    width: 40,
    objectFit: 'cover',
    borderRadius: '50%'
})

const Name = styled(Typography)`
    margin-left: 12px !important;
`
const Status = styled(Typography)`
    font-size: 12px !important;
    color: rgba(0 , 0 ,0, 0.6);
`


const RightContainer = styled(Box)`
margin-left: auto;
& > svg{
    padding: 8px;
    font-size: 23px;
    color: black;
}
`