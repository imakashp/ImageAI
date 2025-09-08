import axios from "axios"
import userModel from "../models/userModel.js"
import FormData from 'form-data'

export const generateImage = async(req , res )=>{
    try{
        const {userId, prompt} = req.body

        const user = await userModel.findById(userId)

        if(!user || !prompt){
            return res.json({sucess: false, message: 'Missing Details'})
        }

        if(user.creditBalance ===0 || userModel.CreditBalance <0 ){
            return res.json({success: false, message: 'No credit Balance', creditBalance: user.creditBalance})
        }

        const fromData = new FormData()
        fromData.append('prompt', prompt)

        const {data} = await axios.post('https://clipdrop-api.co/text-to-image/v1',fromData, {
            headers: {
                'x-api-key':process.env.CLIPDROP_API,
            },
            responseType: 'arraybuffer'
        })
        const base64Image = Buffer.from(data, 'binary').toString('base64')
        const resultImage = `data:image/png;base64, ${base64Image}`

        await userModel.findByIdAndUpdate(user._id, {creditBalance: - 1})
        res.json({success:true, message: "image generated", creditBalance: user.creditBalance-1, resultImage})

    } catch(error){
        console.log(error.message)
        res.json({success: false, message:error.message})
    }
}