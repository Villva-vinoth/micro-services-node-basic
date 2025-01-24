const userModel = require('../../model/user.model');
module.exports ={ 
    createUsers:  (data) =>{
        try {
            const user =  userModel.create(data)
            return user;
        } catch (error) {
            throw error
        }
    },
    getUsers: async () => {
        try {
            const users = await userModel.findAll()
            return users
        } catch (error) {
            throw error
        }
    },
    getUserById: async (data) => {
        try {
            const users = await userModel.findOne({where:{id:data}})
            return users
        } catch (error) {
            throw error
        }
    }   
}