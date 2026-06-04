const subscriptionService = require('../services/subscriptionService');
const { presentSubscription, presentSubscriptions } = require('../presenters/subscriptionPresenter');
const { presentError, presentSuccess } = require('../../common/responsePresenter');

const createSubscription = async (req, res) => {
    try {
        const subscription = await subscriptionService.createSubscription(req.body);
        res.status(201).json(presentSubscription(subscription));
    } catch (error) {
        res.status(500).json(presentError(error.message));
    }
};

const getAllSubscriptions = async (req, res) => {
    try {
        const subscriptions = await subscriptionService.getAllSubscriptions();
        res.status(200).json(presentSubscriptions(subscriptions));
    } catch (error) {
        res.status(500).json(presentError(error.message));
    }
};

const getSubscriptionById = async (req, res) => {
    try {
        const subscription = await subscriptionService.getSubscriptionById(req.params.subscriptionId);
        res.status(200).json(presentSubscription(subscription));
    } catch (error) {
        res.status(500).json(presentError(error.message));
    }
};

const updateSubscription = async (req, res) => {
    try {
        const subscription = await subscriptionService.updateSubscription(req.params.subscriptionId, req.body);
        res.status(200).json(presentSubscription(subscription));
    } catch (error) {
        res.status(500).json(presentError(error.message));
    }
};

const deleteSubscription = async (req, res) => {
    try {
        await subscriptionService.deleteSubscription(req.params.subscriptionId);
        res.status(200).json(presentSuccess('Subscription deleted successfully'));
    } catch (error) {
        res.status(500).json(presentError(error.message));
    }
};

module.exports = {
    createSubscription,
    getAllSubscriptions,
    getSubscriptionById,
    updateSubscription,
    deleteSubscription
};
