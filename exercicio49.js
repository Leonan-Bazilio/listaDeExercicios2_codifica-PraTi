/*49. Você recebe um array de objetos representando transações financeiras. Cada
transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.
 */


const transacoesAleatorias = [
  {
    id: 1,
    valor: 150.75,
    data: new Date(2024, 4, 1), // Mês é zero-indexado, então 4 representa maio
    categoria: 'Alimentação'
  },
  {
    id: 2,
    valor: 2300.00,
    data: new Date(2024, 4, 3),
    categoria: 'Alimentação'
  },
  {
    id: 3,
    valor: 75.50,
    data: new Date(2024, 4, 5),
    categoria: 'Lazer'
  },
  {
    id: 4,
    valor: 300.00,
    data: new Date(2024, 4, 7),
    categoria: 'Educação'
  },
  {
    id: 5,
    valor: 120.90,
    data: new Date(2024, 4, 9),
    categoria: 'Lazer'
  }
];
function separarPorCategoria(objTransacoes) {
  const categoriasTransacoes = {}
  for (venda in objTransacoes) {
    let { categoria, ...demaisDados } = objTransacoes[venda]
    if (categoria in categoriasTransacoes) {
      categoriasTransacoes[categoria].transacoes.push(demaisDados)
      categoriasTransacoes[categoria]['subTotal'] += demaisDados.valor

    } else {
      categoriasTransacoes[categoria] = { transacoes: [demaisDados] }
      categoriasTransacoes[categoria]['subTotal'] = demaisDados.valor
    }
  }

  return categoriasTransacoes
}





console.log(JSON.stringify(separarPorCategoria(transacoesAleatorias)));// usei o json pq so o console estava simplificando o array pra so [ [Object], [Object] ]
