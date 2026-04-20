require('dotenv').config();
const express = require("express");
const v1UserRoutes = require("./v1/routes/userRoutes");
const v1OrganizationRoutes = require("./v1/routes/organizationRouter");
const v1PlanRoutes = require("./v1/routes/planRoutes");
const v1BranchRoutes = require("./v1/routes/branchRouter");
const sequelize = require("./databases/sequelize");
require("./models/associations");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/v1/users", v1UserRoutes);
app.use("/api/v1/organizations", v1OrganizationRoutes);
app.use("/api/v1/plans", v1PlanRoutes);
app.use("/api/v1/branches", v1BranchRoutes);

sequelize.sync({ force: false }) 
  .then(() => {
    console.log('Base de datos sincronizada');
    app.listen(port, () => {
        console.log(` Servidor en puerto ${port}`);
    });
  })
  .catch(err => console.error('Error sincronizando:', err));