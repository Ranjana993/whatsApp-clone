import { Box, styled, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { formatDate, downLoadMedia } from '../../../utils/commonUtiles';
import { AccountContext } from '../../../context/AccountProvider';
import GetAppIcon from '@mui/icons-material/GetApp';

const Pdf = "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/27_Pdf_File_Type_Adobe_logo_logos-512.png"
const SingleMessage = ({ message }) => {

    const { account } = useContext(AccountContext)

    return (
        <>
            {
                account.sub === message.senderId ?
                    <Sent>
                        {
                            message.type === 'file' ? <ImageMessage message={message} /> : <TextMessage message={message} />
                        }
                        <Text>{message.text}</Text>
                        <Time>{formatDate(message.createdAt)}</Time>
                    </Sent>
                    :
                    <Reciever>
                        {
                            message.type === 'file' ? <ImageMessage message={message} /> : <TextMessage message={message} />
                        }
                        <Text>{message.text}</Text>
                        <Time>{formatDate(message.createdAt)}</Time>
                    </Reciever>
            }
        </>

    )
}

const ImageMessage = ({ message }) => {

    return (
        <Box style={{ position: 'relative' }}>
            {
                message?.text?.includes('.pdf') ?
                    <Box style={{ display: 'flex'}}>
                        <img src={Pdf} alt="pdf" style={{ width: 80 }}/>
                        <Typography style={{fontSize:14}}>{message.text.split('/').pop()}</Typography>
                    </Box>
                    :
                    <img style={{ width: 300, height: '100%', objectFit: 'cover' }} src={message.text} alt={message.text} />
            }
            <Time style={{ position: 'absolute', bottom: 0, right: 0 }}> <GetAppIcon  style={{marginRight:10 , border:'1px solid gray' , borderRadius:'70%' }} fontSize='small' onClick={(e)=>downLoadMedia(e ,message.text)}/> {formatDate(message.createdAt)}</Time>
        </Box>
    )
}
const TextMessage = ({ message }) => {
    return (
        <>
            <Text>{message.text}</Text>
            <Time>{formatDate(message.createdAt)}</Time>
        </>
    )
}
















export default SingleMessage;

const Sent = styled(Box)`
    background: #dcf8c6;
    width: 60%;
    margin-left: auto;
    padding: 5px;
    width: fit-content;
    display: flex;
    border-radius: 10px;
    word-break:break-word ;

`

const Text = styled(Typography)`
font-size: 14px;
padding: 0 25px 0 5px ;
`
const Time = styled(Typography)`
font-size: 10px;
color: #919191;
margin-top: 6px;
word-break: keep-all;
/* padding: 0 25px 0 5px ; */
`
const Reciever = styled(Box)`
    background: #ffffff;
    width: 60%;
    margin-right: auto;
    padding: 5px;
    width: fit-content;
    display: flex;
    border-radius: 10px;
    word-break:break-word ;

`