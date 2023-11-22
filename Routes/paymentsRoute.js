// const express = require('express');
// const payment_route = express();

// const bodyParser = require('body-parser');
// payment_route.use(bodyParser.json());
// payment_route.use(bodyParser.urlencoded({ extended:false }));

// const path = require('path');

// payment_route.set('view engine','ejs');
// payment_route.set('views',path.join(__dirname, '../views'));

// const paymentController = require('../Controllers/Paymentcontroller');
// const authMiddleware = require('../Auth/middleware');

// payment_route.get('/', paymentController.renderBuyPage);
// payment_route.post('/pay',authMiddleware, paymentController.payProduct);
// payment_route.get('/success', paymentController.successPage);
// payment_route.get('/cancel', paymentController.cancelPage);

// module.exports = payment_route;

const express = require('express');
const paymentRoute = express.Router();
const bodyParser = require('body-parser');
const authMiddleware = require('../Auth/middleware');
const paypalFunctions = require('../Controllers/Paymentcontroller');

paymentRoute.use(bodyParser.json());
paymentRoute.use(bodyParser.urlencoded({ extended: false }));

paymentRoute.get('/', async (req, res) => {
    try {
        // Assuming you have an 'index' view file
        res.render('index');
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

paymentRoute.post('/pay', authMiddleware, async (req, res) => {
    try {
        const { subtotal, products } = req.body;

        const redirectUrl = await paypalFunctions.createPayment({ subtotal, products });

        res.json({ redirectUrl });
    } catch (error) {
        console.error('Error initiating payment:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

paymentRoute.get('/success', (req, res) => {
    try {
        // Additional logic can be added if needed
        res.json({ success: true });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

paymentRoute.get('/cancel', (req, res) => {
    try {
        res.json({ canceled: true });
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = paymentRoute;
