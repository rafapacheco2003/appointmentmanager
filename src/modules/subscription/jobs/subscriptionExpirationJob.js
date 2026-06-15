const cron = require('node-cron');
const { Op } = require('sequelize');

const Subscription = require('../modules/subscription/models/subscriptionModel');
const SUBSCRIPTION_STATUS = require('../modules/subscription/constants/subscriptionStatus');


const startSubscriptionExpirationJob = () => {

    cron.schedule('0 0 * * *', async () => {

        await Subscription.update(
            {
                status: SUBSCRIPTION_STATUS.EXPIRED
            },
            {
                where:{
                    endDate:{
                        [Op.lt]: new Date()
                    },
                    status: SUBSCRIPTION_STATUS.ACTIVE
                }
            }
        );

    });

};


module.exports = startSubscriptionExpirationJob;