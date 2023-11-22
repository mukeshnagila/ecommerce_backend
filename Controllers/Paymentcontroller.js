// const paypal = require('paypal-rest-sdk');

// // const { PAYPAL_MODE, PAYPAL_CLIENT_KEY, PAYPAL_SECRET_KEY } = process.env;

// // paypal.configure({
// //   'mode': 'sandbox', //sandbox or live
// //   'client_id': PAYPAL_CLIENT_KEY,
// //   'client_secret': PAYPAL_SECRET_KEY
// // });
// paypal.configure({
//     'mode': "sandbox", //sandbox or live
//     'client_id': "AUElyirxebVFvYz_NTs_1hsTnebHA-PgC63O9qM7ulQnlDtu4o92LMDYeV6-PQ-b9Kd4_cG4UQ7nQkRX",
//     'client_secret': "EPM4w6OOvLdovcmb8Y4DYQCO2K7tg_ZJt6EURMg6MBH-VTtFtrJIcPeTUYJDJjN7G5w76qfSO127uEVC"
//   });

// const renderBuyPage = async(req,res)=>{

//     try {
        
//         res.render('index');

//     } catch (error) {
//         console.log(error.message);
//     }

// }

// const payProduct = async(req,res)=>{

//     // try {
        
//     //     const create_payment_json = {
//     //         "intent": "sale",
//     //         "payer": {
//     //             "payment_method": "paypal"
//     //         },
//     //         "redirect_urls": {
//     //             "return_url": "http://localhost:5008/success",
//     //             "cancel_url": "http://localhost:5008/cancel"
//     //         },
//     //         "transactions": [{
//     //             "item_list": {
//     //                 "items": [{
//     //                     "name": "Book",
//     //                     "sku": "001",
//     //                     "price": "25.00",
//     //                     "currency": "USD",
//     //                     "quantity": 1
//     //                 }]
//     //             },
//     //             "amount": {
//     //                 "currency": "USD",
//     //                 "total": "25.00"
//     //             },
//     //             "description": "Hat for the best team ever"
//     //         }]
//     //     };
//     try {
//         const { subtotal, products } = req.body;

//         // Prepare the PayPal payment data dynamically based on your products
//         // const create_payment_json = {
//         //     // ... (previous code)
//         //     "transactions": [{
//         //         "item_list": {
//         //             "items": products.map(item => ({
//         //                 "name": item.name,
//         //                 "sku": item.id,
//         //                 "price": item.price,
//         //                 "currency": "USD",
//         //                 "quantity": item.quantity,
//         //             })),
//         //         },
//         //         "amount": {
//         //             "currency": "USD",
//         //             "total": subtotal,
//         //         },
//         //         "description": "Your order description here",
//         //     }]
//         const create_payment_json = {
//             intent: "sale",
//             payer: {
//                 payment_method: "paypal"
//             },
//             redirect_urls: {
//                 return_url: "http://localhost:5008/success",
//                 cancel_url: "http://localhost:5008/cancel"
//             },
//             transactions: [{
//                 item_list: {
//                     items: products.map(item => ({
//                         name: item.name,
//                         sku: item.id,
//                         price: item.price,
//                         currency: "USD",
//                         quantity: item.quantity,
//                     })),
//                 },
//                 amount: {
//                     currency: "USD",
//                     total: subtotal,
//                 },
//                 description: "Your order description here",
//             }]
//         };

//         paypal.payment.create(create_payment_json, function (error, payment) {
//             if (error) {
//                 throw error;
//             } else {
//                 for(let i = 0;i < payment.links.length;i++){
//                   if(payment.links[i].rel === 'approval_url'){
//                     // res.redirect(payment.links[i].href);
//                     res.json({ redirectUrl: payment.links[i].href });
//                     return;
//                   }
//                 }
//             }
//           });

//     } catch (error) {
//         // console.log(error.message);
//         console.error("Error initiating payment:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }

// }

// const successPage = async(req,res)=>{

//     try {
        
//         const payerId = req.query.PayerID;
//         const paymentId = req.query.paymentId;

//         const execute_payment_json = {
//             "payer_id": payerId,
//             "transactions": [{
//                 "amount": {
//                     "currency": "USD",
//                     "total": "25.00"
//                 }
//             }]
//         };

//         paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
//             if (error) {
//                 console.log(error.response);
//                 throw error;
//             } else {
//                 console.log(JSON.stringify(payment));
//                 res.render('success');
//             }
//         });

//     } catch (error) {
//         console.log(error.message);
//     }

// }

// const cancelPage = async(req,res)=>{

//     try {

//         res.render('cancel');

//     } catch (error) {
//         console.log(error.message);
//     }

// }

// module.exports = {
//     renderBuyPage,
//     payProduct,
//     successPage,
//     cancelPage
// }
const paypal = require('paypal-rest-sdk');

paypal.configure({
    'mode': 'sandbox', // sandbox or live
    'client_id': 'AUElyirxebVFvYz_NTs_1hsTnebHA-PgC63O9qM7ulQnlDtu4o92LMDYeV6-PQ-b9Kd4_cG4UQ7nQkRX',
    'client_secret': 'EPM4w6OOvLdovcmb8Y4DYQCO2K7tg_ZJt6EURMg6MBH-VTtFtrJIcPeTUYJDJjN7G5w76qfSO127uEVC'
});

const createPayment = async ({ subtotal, products }) => {
    return new Promise((resolve, reject) => {
        const create_payment_json = {
            intent: 'sale',
            payer: {
                payment_method: 'paypal'
            },
            transactions: [{
                item_list: {
                    items: products.map(item => ({
                        name: item.name,
                        sku: item.id,
                        price: item.price,
                        currency: 'USD',
                        quantity: item.quantity,
                    })),
                },
                amount: {
                    currency: 'USD',
                    total: subtotal,
                },
                description: 'Your order description here',
            }]
        };

        paypal.payment.create(create_payment_json, (error, payment) => {
            if (error) {
                reject(error);
            } else {
                for (let i = 0; i < payment.links.length; i++) {
                    if (payment.links[i].rel === 'approval_url') {
                        resolve(payment.links[i].href);
                        return;
                    }
                }
            }
        });
    });
};

module.exports = {
    createPayment
};
