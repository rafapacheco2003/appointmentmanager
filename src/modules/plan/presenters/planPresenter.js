const presentPlan = (plan) =>{
    if(!plan) return null;

    return {
        id: plan.id,
        name: plan.name,
        description: plan.description,
        maxOrganizations: plan.maxOrganizations,
        maxBranchesPerOrg: plan.maxBranchesPerOrg,
        durationMonths: plan.durationMonths,
        price: plan.price
    };
};



const presentPlans = (plans) => {
    return plans.map(presentPlan);
};

module.exports = { presentPlan, presentPlans };