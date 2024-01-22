import express, { Request, Response } from "express";
import { validate } from "./cpfValidator";
const app = express();
app.use(express.json());

const products = [
  { id: 1, name: "Laptop", price: 999.99 },
  { id: 2, name: "Smartphone", price: 499.99 },
  { id: 3, name: "Headphones", price: 79.99 },
  { id: 4, name: "Smartwatch", price: 199.99 },
  { id: 5, name: "Camera", price: 299.99 },
  { id: 6, name: "Tablet", price: 249.99 },
];
const coupons = [
  { id: 1, code: "SAVE20", discountPercentage: 20 },
  { id: 2, code: "FREESHIP", discountPercentage: 15 },
  { id: 3, code: "FLASHSALE", discountPercentage: 30 },
  { id: 4, code: "WELCOME10", discountPercentage: 10 },
  { id: 5, code: "HOLIDAY50", discountPercentage: 50 },
];

function findProduct(id: number) {
  return products.find(product => product.id === id)
}

function findCoupon(id: number) {
  return coupons.find(coupon => coupon.id === id)
}

app.post("/api/checkout", (req: Request, res: Response) => {
  const { cpf, items, coupon } = req.body;
  if (!validate(cpf)) return res.json({ message: "Invalid CPF", code: 400 });
  const cart = {
    total: 0
  }
  for (const item of items) {
    const product = findProduct(item.id)
    if (product) {
      cart.total += product.price * item.quantity
    }
  }
  if (coupon) {
    const couponDetails = findCoupon(coupon.id)
    if (couponDetails) {
      const couponPercentage = couponDetails.discountPercentage / 100
      cart.total = cart.total * couponPercentage
    }
  }
  return res.json({
    message: "sucess",
    code: 201,
    details: cart
  })
});

app.listen(3000);
