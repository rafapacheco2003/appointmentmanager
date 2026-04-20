const { presentError } = require('../presenters/responsePresenter');

const validateRequest = (schema) => {
    return (req, res, next) => {
        try {
            schema.parse(req.body); // Valida el body
            next(); // Si pasa, continúa al controller
        } catch (error) {
            const message = error.errors?.[0]?.message ?? error.message;
            res.status(400).json(presentError(message));
        }
    };
};

module.exports = validateRequest;
