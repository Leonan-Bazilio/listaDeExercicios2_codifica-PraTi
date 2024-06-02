/*50. Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema
deverá ser capaz de interagir com o usuário através do console do navegador e manter
um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as
informações. Não é necessário interface gráfica, apenas funcionalidade lógica.
1. Estrutura de Dados:
○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome,
cidade, quartos totais e quartos disponiveis.
○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e
nomeCliente.
2. Funcionalidades:
○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis
disponíveis em uma cidade específica.
○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso
deve diminuir o número de quartos disponiveis do hotel.
○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve
aumentar o número de quartos disponiveis no hotel correspondente.
○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do
cliente.
3. Regras de Negócio:
○ Um hotel só pode aceitar reservas se houver quartos disponíveis.
○ As reservas devem ser identificadas por um ID único e associadas a um
único hotel.*/
const prompt = require("prompt-sync")()
let contadorIdHotel = 1
let contadorIdReserva = 1
const listaDeHoteis = []
const listaDeReservas = []

function adicionarHotel() {
  const nome = prompt("digite nome: ").toLowerCase()
  const cidade = prompt("digite cidade: ").toLowerCase()
  const quartosTotais = prompt("digite quantidade de quartos totais: ")
  const quartosDisponiveis = prompt("digite quantidade de quartos disponiveis: ")
  listaDeHoteis.push({ id: contadorIdHotel, nome, cidade, quartosTotais, quartosDisponiveis, listaDeClientes: [] })
  contadorIdHotel++

  console.log("Cadastro realido com sucesso")
}

function buscarHotelPorCidade() {
  const cidade = prompt("Deseja filtrar as buscas para qual cidade?").toLowerCase()
  return listaDeHoteis.filter(hotel => hotel.cidade === cidade)
}


function adicionarReserva() {
  const idHotel = prompt("digite id do hotel da reserva: ")
  const nomeCliente = prompt("digite nome do cliente: ").toLowerCase()
  for (hotel of listaDeHoteis) {
    {
      if (hotel.quartosDisponiveis === 0) {
        return console.log("Este hotel não tem vagas disponiveis para reservas")
      }
      if (hotel.id == idHotel) {
        hotel.listaDeClientes.push({ idReserva: contadorIdReserva, nomeCliente })
        hotel.quartosDisponiveis--
      }
    }
  }
  listaDeReservas.push({ id: contadorIdReserva, idHotel, nomeCliente })
  contadorIdReserva++
}


function cancelarReserva() {
  const idReserva = prompt("digite id do hotel da reserva: ")
  const indiceReserva = listaDeReservas.findIndex(reserva => reserva.id == idReserva)
  if (indiceReserva === -1) {
    return console.log("Reserva não encontrada, verifique os dados e tento novamente")
  }
  for (hotel of listaDeHoteis) {
    const indiceReservaNaListaDeHoteis = hotel.listaDeClientes.findIndex(reserva => reserva.idReserva == idReserva)
    if (indiceReservaNaListaDeHoteis != -1) {
      hotel.listaDeClientes.splice(indiceReservaNaListaDeHoteis, 1)
    }
    hotel.quartosDisponiveis++

  }
  listaDeReservas.splice(indiceReserva, 1)

}

function menu() {
  while (true) {
    console.log(`Selecione o numero equivalente a opção que deseja: 
    \n 1 listar todos os hoteis disponiveis 
    \n 2 para listar hoteis de uma cidade em especifico  
    \n 3 para cadastrar um novo hotel 
    \n 4 para cadastrar uma nova reserva 
    \n 5 para cancelar uma reserva  `)
    const resMenu = prompt("")

    switch (resMenu) {
      case '1':
        console.log(listaDeHoteis)
        break
      case '2':
        console.log(buscarHotelPorCidade(cidade))
        break
      case '3':
        adicionarHotel()
        break
      case '4':
        adicionarReserva()
        break
      case '5':
        cancelarReserva()
        break
      default:
        console.log(`Encerrando`)
        return
    }
    const continuar = prompt("deseja executar mais alguma operação?s/n ").toLowerCase()
    if (continuar === "n") {
      break
    }
  }
}
menu()

