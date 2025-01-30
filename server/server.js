
//dotenv package for managing environment variables, port...
require("dotenv").config();
const express = require("express");

const app = express();

//get all assets
app.get("/api/v1/assets", (req, res) => {
    //http://localhost:4000/api/v1/getAssets this is the route that this get api will use

    res.status(200).json({
        status: "success",
        data: {
        assets: "ALL ASSETS",
        }
    });
});

//get one asset
app.get("/api/v1/assets/:id", (req, res) => {
    console.log(req);
});



//env variable for PORT in .env file, if it is not available, use 3001
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});


