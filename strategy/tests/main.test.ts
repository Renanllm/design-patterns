import axios from "axios"

type Response = {
  message: string
  code: number
  details: {
    total: number
  }
}

test("should not be able to checkout using a invalid CPF", async () => {
  const payload = {
    cpf: "123.245.789-09"
  }
  const response = await axios.post<Response>("http://localhost:3000/api/checkout", payload)
  expect(response.data.code).toBe(400)
})

test("should calculate total properly", async () => {
  const payload = {
    cpf: "661.072.630-20",
    items: [
      { id: 2, quantity: 2 },
      { id: 4, quantity: 1 },
      { id: 6, quantity: 1 },
    ]
  }
  const response = await axios.post<Response>("http://localhost:3000/api/checkout", payload)
  expect(response.data.details.total).toBe(1449.96)
})

test("should calculate total properly when using coupon", async () => {
  const payload = {
    cpf: "661.072.630-20",
    items: [
      { id: 2, quantity: 2 },
      { id: 4, quantity: 1 },
      { id: 6, quantity: 1 },
    ],
    coupon: { id: 5 }
  }
  const response = await axios.post<Response>("http://localhost:3000/api/checkout", payload)
  expect(response.data.details.total).toBe(724.98)
})