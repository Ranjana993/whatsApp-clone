import { Box, InputBase, styled } from '@mui/material';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MicIcon from '@mui/icons-material/Mic';
import { useEffect } from 'react';
import { uploadFile } from '../../../Service/api';

const ChatFooter = ({ SendText, setValue, value, file, setFile, setImage }) => {


    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file)
                let response = await uploadFile(data)
                setImage(response.data)
            }
        }
        getImage()
    }, [file])

    
    const onFileChange = (e) => {
        setFile(e.target.files[0]);
        setValue(e.target.files[0].name)
    }




    return (
        <Container>
            <EmojiEmotionsOutlinedIcon />
            <label htmlFor="fileInput"><Clip /></label>
            <input type="file" name="" id="fileInput" style={{ display: "none" }} onChange={(e) => onFileChange(e)} />
            <SearchBox>
                <InputField
                    placeholder='Typing  a message ...'
                    value={value}
                    onChange={(e) => setValue(e.target.value)} onKeyPress={(e) => SendText(e)}
                />
            </SearchBox>
            <MicIcon />
        </Container>
    )
}

export default ChatFooter;

const Container = styled(Box)`
    height: 55px;
    background-color: #ededed;
    display: flex;
    width: 100%;
    align-items: center;
    padding: 0 15px;
    &>*{
        margin: 5px;
        color: #919191;
    }

`
const SearchBox = styled(Box)`
    background-color: #ffffff;
    border-radius: 18px;
    width: calc(94% - 100px);
`
const InputField = styled(InputBase)`
    width: 100%;
    padding: 20px;
    height: 20px;
    padding-left: 25px;
    font-size: 14px;
`
const Clip = styled(AttachFileIcon)`
transform: rotate(40deg);
`