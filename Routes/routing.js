const authmiddleware = require("../Auth/middleware");
const { addProduct, finddata, addcart, findProduct} = require("../Controllers/Controller");
const { register, Login, getUserList } = require("../Controllers/signupLogin");

const routing = require("express").Router();

    routing.post("/register", register)
    routing.post("/getUserList", getUserList)

    routing.post("/login", Login)
    
    routing.post("/addproduct", addProduct)
    
    routing.get("/findProduct", finddata)

    routing.post("/finditem", findProduct)

    routing.post("/addcart", authmiddleware, addcart)

module.exports = routing;