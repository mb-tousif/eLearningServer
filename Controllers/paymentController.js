import Stripe from "stripe";

dotenv.config();

const stripe = Stripe(process.env.STRIPE_KEY);

export const paymentCheckout = async ( res, req ) => {
    try {
        const customer = await stripe.customers.create({
          metadata: {
            userId: req.body.userId,
            cart: JSON.stringify(req.body.cartItems),
          },
        });

        const line_items = req.body.cartItems.map((item) => {
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.name,
                images: [item.image],
                description: item.desc,
                metadata: {
                  id: item.id,
                },
              },
              unit_amount: item.price * 100,
            },
            quantity: item.cartQuantity,
          };
        });
        
    } catch (error) {
        
    }
}