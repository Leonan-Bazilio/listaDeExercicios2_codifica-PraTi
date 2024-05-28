/*48. Você recebe dois objetos que representam o inventário de duas lojas diferentes:
inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
item em estoque. Escreva uma função que combine os inventários em um único objeto.
Se um item aparecer em ambas as lojas, some as quantidades. */

const inventoryStoreA = {
  shoes: 2,
  shirt: 5,
  pants: 10,
  backpack: 3
};

const inventoryStoreB = {
  shirt: 7,
  shoes: 4,
  sandals: 6,
  shirt: 8
};

function mergeInventory(inventoryA, inventoryB) {
  for (item in inventoryB) {
    if (item in inventoryA) {
      inventoryA[item] += inventoryB[item]
    } else {
      inventoryA[item] = inventoryB[item]
    }
  }
  return inventoryA

}
console.log(mergeInventory(inventoryStoreA, inventoryStoreB))

