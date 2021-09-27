export default function estaContido(nome) {

    const arr = []

    clientes.filter((cliente) => cliente.nome.split(' '))
        .map(function (cliente) {
            const nomeTotal = cliente.nome.split(' ').shift()

            return arr.push(nomeTotal)

        })
    if (arr.includes(nome)) {
        console.log("Sim, está incluso.")
    } else {
        console.log("Não, não está incluso.")
    }
}