const orderModel = require('../../model/order.model');
module.exports ={ 
    createorders:  (data) =>{
        try {
            const order =  orderModel.create(data)
            return order;
        } catch (error) {
            throw error
        }
    },
    getorders: async () => {
        try {
            const orders = await orderModel.findAll()
            return orders
        } catch (error) {
            throw error
        }
    },
    getorderById: async (data) => {
        try {
            console.log(data,"use")
            const orders = await orderModel.findOne({where:{order_id:data}})
            return orders
        } catch (error) {
            throw error
        }
    }   
}