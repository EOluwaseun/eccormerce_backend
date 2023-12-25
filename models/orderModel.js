import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
        },
        count: Number,
        color: String,
      },
    ],
    paymentIntent: {},
    paidAt:{
      type:Date,
      default:Date.now()
    },
    month:{
      type:String,
      default:new Date().getMonth()
    },
    totalPrice:{
      type:Number,
      required:true,
    },
    totalPriceAfterDiscount:{
      type:Number,
      required:true,
    },
    orderStatus: {
      type: String,
      default: 'Not Processed',
      enum: [
        'Not Processed',
        'Cash on delivery',
        'Processing',
        'Dispatched',
        'Cancelled',
        'Delivered',
      ],
    },
    orderby: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);
const Order = mongoose.model('Order', orderSchema);
export default Order;
