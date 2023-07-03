import axios from "axios";

const url = "http://localhost:8000"

export const addUsers = async (data) => {
    try {
        await axios.post(`${url}/add`, data)
    }
    catch (error) {
        console.log("AddUser error", error);
    }
}

export const getUser = async () => {
    try {
        let response = await axios.get(`${url}/users`)
        console.log(response.data);
        return response.data
    } catch (error) {
        console.log("getUser error in frontend", error);
    }
}


export const setConversation = async (data) => {
    try {
        await axios.post(`${url}/conversation/add`, data)
    } catch (error) {
        console.log("SetConversation API ....", error);
    }
}

export const getConversation = async (data) => {
    try {
        let response = await axios.post(`${url}/conversation/get`, data)
        return response.data
    } catch (error) {
        console.log("GetConversation from get  API ....", error);
    }
}

export const newMessage = async (data) => {
    try {
        let response = await axios.post(`${url}/message/add`, data)
        // console.log(response);
        return response.data
    }
    catch (error) {
        console.log("error while calling new mesage  API ....", error);
    }
}





export const getMessage = async (id) => {
    try {
        let response = await axios.get(`${url}/message/get/${id}`);
        return response.data
    }
    catch (error) {
        console.log("error while calling get mesage  API ....", error.message);
    }
}


export const uploadFile = async (data) => {
    try {
        return await axios.post(`${url}/file/upload`, data);
    }
    catch (error) {
        console.log("error while calling file upload file  API ....", error.message);
    }

}