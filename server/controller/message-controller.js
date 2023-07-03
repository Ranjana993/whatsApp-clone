import conversation from "../model/conversation.js";
import messageModal from "../model/message.js";

export const newMessages = async (req, res) => {
    try {
        const newMessage = new messageModal(req.body)
        await newMessage.save()
        await conversation.findByIdAndUpdate(req.body.conversationId, { message: req.body.text })


        return res.status(200).json("Message has been sent successfuly")
    }
    catch (error) {
        return res.status(500).json("Message-controller error....", error.message)
    }
}





export const getMessage = async (req, res) => {
    try {
        const mesage = await messageModal.find({ conversationId: req.params.id });
        return res.status(200).json(mesage)
    }
    catch (error) {
        return res.status(500).json(error.message)
    }
}