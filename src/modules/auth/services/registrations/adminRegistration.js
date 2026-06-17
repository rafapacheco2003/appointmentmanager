const { createSubscription } = require('../../../subscription/services/subscriptionService');

const role = 'ADMIN';


const afterCreate = async(
    user,
    data,
    transaction
)=>{


    if(!data.subscription?.planId){
        throw new Error('Plan is required');
    }


    const subscription = await createSubscription(
        {
            ...data.subscription,
            userId:user.id
        },
        transaction
    );


    return {
        user,
        subscription
    };

};


module.exports = {
    role,
    afterCreate
};