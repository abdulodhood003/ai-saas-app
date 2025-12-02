import userModel from "../models/userModel.js";
import FormData from "form-data";
import axios from 'axios';

export const generateImage = async(req , res) =>{
    try {
        const { prompt } = req.body;      // user-provided data
        const { userId } = req.user;      // JWT-provided user ID

        const user = await userModel.findById(userId);

        if(!user || !prompt) {
            return res.json({success: false, message: "Missing Details"});
        }

        if(user.creditBalance <= 0) {
            return res.json({success: false, message:"No credit Balance", creditBalance: user.creditBalance});
        }

        // Prepare form data for API
        const formData = new FormData();
        formData.append('prompt', prompt);

        const { data } = await axios.post(
            'https://clipdrop-api.co/text-to-image/v1',
            formData,
            {
                headers:{
                     'x-api-key': process.env.CLIPDROP_API,
                },
                responseType: 'arraybuffer'
            }
        );

        const base64Image = Buffer.from(data,'binary').toString('base64');
        const resultImage = `data:image/png;base64,${base64Image}`;

        // Decrement credit in database
        const updatedUser = await userModel.findByIdAndUpdate(
            userId,
            { $inc: { creditBalance: -1 } },
            { new: true } // returns updated document
        );

        res.json({
            success: true,
            message: "Image Generated Successfully",
            creditBalance: updatedUser.creditBalance,
            resultImage
        });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}
