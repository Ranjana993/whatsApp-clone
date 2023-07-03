import user from "../model/usermodel.js"


export const addUser = async (req, res) => {
    try {
        const exist = await user.findOne({ sub: req.body.sub })
        if (exist) {
            res.status(200).json({ meg: "User already exist" })
            return;
        }
        const newuser = new user(req.body);
        await newuser.save()
        return res.status(200).json(newuser)

    } catch (error) {
        res.status(500).json(error)
    }
}

export const getUser = async (req, res) => {
    try {
        const users = await user.find({})
        return res.status(200).json(users)
    } catch (error) {
        return res.status(500).json({ msg: error })
    }
}