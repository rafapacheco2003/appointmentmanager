const Plan = require('./planModel');


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
    const [updatedRows] = await Plan.update(planData, { where: { id } });
    if (!updatedRows) {
        throw new Error('Plan not found');
    }
    return await getPlanById(id);
};

const deletePlan = async (id) => {
    const deletedRows = await Plan.destroy({ where: { id } });
    if (!deletedRows) {
        throw new Error('Plan not found');
    }
    return deletedRows;
};

module.exports = { createPlan, getAllPlans, getPlanById, updatePlan, deletePlan };