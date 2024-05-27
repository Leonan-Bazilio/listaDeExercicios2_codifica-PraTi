/*46. Suponha que você tem um array de objetos onde cada objeto representa uma venda
com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
de vendas por vendedor.
 */

const sales = [
  { seller: "Leonan", price: 1015 },
  { seller: "Aaaaaaaa", price: 157 },
  { seller: "Leonan", price: 208.90 },
  { seller: "Bbbbbbbb", price: 25 },
  { seller: "Aaaaaaaa", price: 380 },
  { seller: "Aaaaaaaa", price: 309 },
  { seller: "Bbbbbbbb", price: 400 }
]
function totalSales(salesObj) {
  let totalSales = {}
  for (eachSale of salesObj) {
    const { seller, price } = eachSale
    seller in totalSales ? totalSales[seller] += price : totalSales[seller] = price
  }
  return totalSales
}
console.log(totalSales(sales))
