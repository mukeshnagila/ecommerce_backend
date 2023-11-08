const { addProduct, finddata} = require("../Controllers/Controller");
const { register, Login } = require("../Controllers/signupLogin");

const routing = require("express").Router();

    routing.post("/register", register)

    routing.post("/login", Login)
    
    routing.post("/addproduct", addProduct)
    
    routing.get("/findProduct", finddata)

module.exports = routing;