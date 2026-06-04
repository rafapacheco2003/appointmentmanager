const express = require('express');
const router = express.Router();
const planController = require('./planController');
const validateRequest = require('../../middlewares/validateRequest');
const { createPlanSchema, updatePlanSchema } = require('./planSchema');

router
    .get('/', planController.getAllPlans)
    .post('/', validateRequest(createPlanSchema), planController.createPlan)
    .get('/:planId', planController.getPlanById)
    .put('/:planId', validateRequest(updatePlanSchema), planController.updatePlan)
    .delete('/:planId', planController.deletePlan);

module.exports = router;