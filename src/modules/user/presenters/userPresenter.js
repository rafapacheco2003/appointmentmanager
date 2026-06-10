const presentUser = (user) => {
    if (!user) return null;
    
    return {
        id: user.id,
        rol: user.rol,
        name: user.name,
        email: user.email
    };
};

const presentUsers = (users) => {
    return users.map(presentUser);
};

module.exports = {
    presentUser,
    presentUsers
};
