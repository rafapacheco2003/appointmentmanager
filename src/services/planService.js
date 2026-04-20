const Plan = require('../models/planModel');


const createPlan = async (planData) => {
    return await Plan.create(planData);
};

const getAllPlans = async () => {
    return await Plan.findAll();
};

const getPlanById = async (id) => {
    return await Plan.findByPk(id);
};

const updatePlan = async (id, planData) => {
    return await Plan.update(planData, { where: { id } });
};

const deletePlan = async (id) => {
    return await Plan.destroy({ where: { id } });
};

module.exports = { createPlan, getAllPlans, getPlanById, updatePlan, deletePlan };