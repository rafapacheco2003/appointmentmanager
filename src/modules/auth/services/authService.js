const sequelize = require('../../../databases/sequelize');
const { createUserWithRole } = require('./registrationFactory');

const adminRegistration = require('../services/registrations/adminRegistration');


const register = async (registration, data) => {

    return sequelize.transaction(
        async(transaction)=>{

            const user = await createUserWithRole(
                registration.role,
                data,
                transaction
            );


            return registration.afterCreate(
                user,
                data,
                transaction
            );

        }
    );

};


const registerAdmin = async(data)=>{
    return register(
        adminRegistration,
        data
    );
};


module.exports = {
    registerAdmin
};