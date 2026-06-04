const express = require('express');
const router = express.Router();
const subscriptionController = require('../../modules/subscription/controllers/subscriptionController');
const validateRequest = require('../../modules/common/middlewares/validateRequest');
const { createSubscriptionSchema, updateSubscriptionSchema } = require('../../modules/subscription/schemas/subscriptionSchema');

router
    .get('/', subscriptionController.getAllSubscriptions)
    .post('/', validateRequest(createSubscriptionSchema), subscriptionController.createSubscription)
    .get('/:subscriptionId', subscriptionController.getSubscriptionById)
    .put('/:subscriptionId', validateRequest(updateSubscriptionSchema), subscriptionController.updateSubscription)
    .delete('/:subscriptionId', subscriptionController.deleteSubscription);

module.exports = router;
