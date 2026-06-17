const role = 'EMPLOYEE';


const afterCreate = async (user) => {

    return {
        user
    };

};


module.exports = {
    role,
    afterCreate
};