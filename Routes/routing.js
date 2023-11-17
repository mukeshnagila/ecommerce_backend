const authMiddleware = require("../Auth/middleware");
const { addProduct, finddata, addcart, findProduct, finduser, searchProduct} = require("../Controllers/Controller");
const { register, Login, getUserList } = require("../Controllers/signupLogin");

const routing = require("express").Router();

    routing.post("/register", register)
    routing.post("/getUserList", getUserList)

    routing.post("/login", Login)
    
    routing.post("/addproduct", addProduct)
    
    routing.get("/findProduct", finddata)

    routing.get("/finduser",authMiddleware, finduser)

    routing.get("/search", searchProduct);

    routing.post("/finditem", findProduct)

    routing.post("/addcart",authMiddleware, addcart)

module.exports = routing;