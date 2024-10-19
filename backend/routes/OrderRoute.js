import express from 'express'
import adminAuth from '../middleware/adminAuth'
import { placeOrder,placeOrderStripe,placeOrderRazorpay,allOrders,userOrders,updateStatus } from '../controllers/OrderController'
import authUser from '../middleware/au'
const orderRouter = express.Router()

//Admin features
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

//Payment features

orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',placeOrderStripe)