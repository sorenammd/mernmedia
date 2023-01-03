import User from "../models/User.js";


export const getUer =async (req,res)=>{
    try {
        const {id}= req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({message:err.message});
    }
}
