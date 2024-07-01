import Razorpay from 'razorpay';

const instance = new Razorpay({
  key_id: '',
  key_secret: '',
});

export const checkout = async (req, res) => {
  const option = {
    amount: 5000,
    currency: 'USD',
  };
  const order = await instance.orders.create(option);
  res.json({
    success: true,
    order,
  });
};
export const paymentVerification = async (req, res) => {
  const { razorpayOrderId, razorpayPaymentId } = req.body;
  res.json({
    razorpayOrderId,
    razorpayPaymentId,
  });
};
