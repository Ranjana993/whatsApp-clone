

import multer from "multer"
import { GridFsStorage } from 'multer-gridfs-storage';




const storage = new GridFsStorage({
    url: "mongodb://localhost:27017/whatsapp",
    options: { useUnifiedTopology: true, useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png","image/jpg","image/jpeg"];

        if (match.indexOf(file.memeType) === -1)
            return `${Date.now()}-file-${file.originalname}`;

        return {
            bucketName: "fs",
            filename: `${Date.now()}-file-${file.originalname}`
        }
    }
});



export default multer({ storage })