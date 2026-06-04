const presentError = (message) => {
    return { error: message };
};

const presentSuccess = (message) => {
    return { message };
};

module.exports = {
    presentError,
    presentSuccess
};
