
//dotenv package for managing environment variables, port...
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();

//express middleware for retrieving data from the client - in JSON format to 
//takes the information in the body of the request and sets it equal to teh req object
app.use(express.json());


//get all assets
app.get("/api/v1/assets", (req, res) => {
    //http://localhost:4000/api/v1/assets this is the route that this get api will use


    //responses back to the client
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

    res.status(200).json({
        status: "success",
        data: {
            asset: "LT-qwerty"
        }
    })
});

//creat an asset
app.post("/api/v1/assets", (req, res) => {
        console.log(req.body);

        res.status(201).json({
            status: "success",
            data: {
                asset: "LT-qwerty"
            }
        })
});

//update an asset
app.put("/api/v1/assets/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.body);

    res.status(200).json({
        status: "success",
        data: {
            asset: "LT-qwerty"
        }
    })
});

//delete an asset

app.delete("/api/v1/assets/:id", (req, res) => {
    res.status(204).json({
        status: "success",
    })
});

//env variable for PORT in .env file, if it is not available, use 3001
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is up and listening on port ${port}`);
});


