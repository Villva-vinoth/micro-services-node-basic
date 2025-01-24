const {createorders, getorders, getorderById} = require('../services/order.service')
module.exports={
    createorders:async ( req, res,next)=>{
        try {
            const data = req.body;
            const order = await createorders(data)
            return res.status(201).json({message:'Created SuccessFully !',order})
        } catch (error) {
            next(error)
        }
    },
    getorders:async ( req, res,next)=>{
        try {
            const orders = await getorders();
            return res.status(200).json({message:'Records Fetched SuccessFully !',data: orders})
        } catch (error) {
            next(error)
        }
    },
    getorderById: async ( req, res,next)=>{
        try {
            // console.log(req.params)
            const data = req.params.order_id;
            const order = await getorderById(data);
            return res.status(200).json({message:'Record Fetched SuccessFully !',data: order})
        } catch (error) {
            next(error)
        }
    },
}