import  express  from "express";
import { getConversation, newConversation } from "../controller/ConversationController.js";
import { getImage, uploadFile } from "../controller/imageController.js";
import { getMessage, newMessages  } from "../controller/message-controller.js";
import { addUser , getUser } from "../controller/usercontroller.js";
import upload from "../utils/upload.js"

const route = express.Router()

route.post('/add' , addUser)
route.get('/users' , getUser)
route.post('/conversation/add', newConversation)
route.post('/conversation/get', getConversation)
route.post('/message/add',newMessages )
route.get('/message/get/:id' , getMessage)
route.post('/file/upload', upload.single("file"),uploadFile)
route.get('/file/:filename' , getImage);
export default route;