import faker from 'faker'
faker.locale = 'pt_BR'

/* TAREFA 1

Mockar a criação dos objetos respeitando os seguintes requisitos:
    - Os dados devem estar em pt_BR;
    - Os dados devem ser coerentes com os seus campos.
    - As datas de nascimento devem ser entre 1910 a 2019.
    - Os nomes devem ser nomes completos.

*/

const clientes = new Array

function gerarClientes() {

    for (let i = 0; i < 5; i++) {

        const nome = faker.name.findName()
        const nascimento = faker.date.past(109, 2019).getFullYear()
        const genero = faker.name.gender(nome)
        const ultimaCompra = `${faker.date.recent(2020).getDay() + 1}/${faker.date.past(2020).getMonth() + 1}/${faker.date.recent(2020).getFullYear()}`
        const totalCompras = Math.floor(Math.random() * (30 - 1) + 1)

        const cliente = {
            nome,
            nascimento,
            genero,
            ultimaCompra,
            totalCompras
        }
        clientes.push(cliente)
    }
    return clientes
}



/* --------- Função que cria o template dos Títulos das Tarefas --------- */

function titulo(numeroDaTarefa) {
    console.log(`
    #-----------#------------#
    #--------TAREFA ${numeroDaTarefa}--------#
    #-----------#------------#`)
}

/* ------ Fim da Função que cria o template dos Títulos das Tarefas ------ */

/* --------- Função que cria o template da Descrição das Tarefas --------- */

function descricao(descricao) {
    console.log(`
    #-----------#-----------#-----------#-----------#-----------#
    ${descricao}
    #-----------#-----------#-----------#-----------#-----------#
    `)
}

/* ------ Fim da Função que cria o template da Descrição das Tarefas ------ */

/* TAREFA 2:
 
Desenvolva, utilizando filter, uma função que,
dado um caractere de entrada, retorne todos os
registros de clientes cujo o nome inicia com o
caractere.
 
*/

function filtrar(letra) {

    clientes.filter((cliente) => cliente.nome.slice(0, 1) == letra)

    titulo(2) // Invoca o template de título
    descricao(`Desenvolva, utilizando filter, uma função que,
    dado um caractere de entrada, retorne todos os
    registros de clientes cujo o nome inicia com o
    caractere.`)

    const teste = []

    clientes.filter((cliente) => {
        const arrCliente = cliente.nome.slice(0, 1) == letra

        if (arrCliente) {
            let obj = {
                nome: cliente.nome,
                nascimento: cliente.nascimento,
                genero: cliente.genero,
                ultimaCompra: cliente.ultimaCompra,
                totalCompras: cliente.totalCompras
            }
            teste.push(obj)
        }
    }

    )
    if (teste == '') {
        console.log('Não há clientes com esta inicial.')
    }
    else {
        console.log(teste)
    }
}

/* TAREFA 3
 
Retorne o array de clientes
 
*/


function listar() {

    titulo(3) // Invoca o template de título
    descricao(`Retorne o array de clientes.`)

    console.log(clientes)
}

/* TAREFA 4
 
Desenvolva uma função que, dado o caractere de entrada,
retorna apenas um número com o total de registros
encontrados.
 
*/

function totalRegistros() {

    titulo(4) // Invoca o template de título
    descricao(`Desenvolva uma função que, dado o caractere de entrada,
    retorna apenas um número com o total de registros
    encontrados.`)


    console.log(`O total de registros encontrados até o momento são ${clientes.length}.`)
}

/* TAREFA 5
 
Desenvolva uma função que retorne apenas os nomes dos
clientes.
 
*/

function somenteNomes() {

    titulo(5) // Invoca o template de título
    descricao(`Desenvolva uma função que retorne apenas os nomes dos
    clientes.`)

    clientes.map((cliente, indice) => console.log(`${indice + 1}. ${cliente.nome}`))
}

/* TAREFA 6
 
Desenvolva uma função que retorne apenas o primeiro
nome dos clientes.
 
*/

function primeiroNome() {

    titulo(6) // Invoca o template de título
    descricao(`Desenvolva uma função que retorne apenas o primeiro
    nome dos clientes.`)

    clientes.map(function (cliente) {
        const nomeTotal = cliente.nome.split(' ')
        return console.log(nomeTotal[0])
    })
}

/* TAREFA 7
 
Desenvolva uma função que retorne apenas o primeiro
nome dos clientes cujo os nomes começam com o caractere
de entrada da função.
 
*/

function filtrarPrimeiroNome(letra) {

    titulo(7) // Invoca o template de título
    descricao(`Desenvolva uma função que retorne apenas o primeiro
    nome dos clientes cujo os nomes começam com o caractere
    de entrada da função.`)

    clientes.filter((cliente) => cliente.nome.slice(0, 1) == letra)
        .map(function (cliente) {
            const nomeTotal = cliente.nome.split(' ')
            return console.log(nomeTotal[0])
        })
}

/* TAREFA 8
 
Desenvolva uma função que retorne apenas o primeiro nome
dos clientes cujo os nomes começam com o caractere de
entrada da função.
 
*/

function maiores() {

    titulo(8) // Invoca o template de título
    descricao(`Desenvolva uma função que retorne apenas o primeiro nome
    dos clientes cujo os nomes começam com o caractere de
    entrada da função.`)

    console.log(clientes.filter((cliente) => (2019 - cliente.nascimento) >= 18))
}

/* TAREFA 9
 
Desenvolva uma função que, dado um nome de entrada, retorna
se o nome está contido na lista.
 
*/

function estaContido(nome) {

    const arr = []

    clientes.filter((cliente) => cliente.nome.split(' '))
        .map(function (cliente) {
            const nomeTotal = cliente.nome.split(' ').shift()

            return arr.push(nomeTotal)

        })

    titulo(9) // Invoca o template de título
    descricao(`Desenvolva uma função que, dado um nome de entrada, retorna
    se o nome está contido na lista.`)

    if (arr.includes(nome)) {
        console.log("Sim, está incluso.")
    } else {
        console.log("Não, não está incluso.")
    }
}

/* TAREFA 10

Implemente uma função que retorna o total de vendas
realizadas somando as compras de todos os clientes.

*/

function totalCompras() {

    const compras = new Array()
    clientes.forEach((cliente) => compras.push(cliente.totalCompras))

    titulo(10) // Invoca o template de título
    descricao(`Implemente uma função que retorna o total de vendas
    realizadas somando as compras de todos os clientes.`)

    console.log(compras.reduce((a, b) => a + b) + ' compras totais.')
}

/* TAREFA 11

Implemente uma função que retorne os dados dos
clientes que não compram há mais de 1 ano.

*/

function naoCompram1Ano() {

    titulo(11) // Invoca o template de título
    descricao(`Implemente uma função que retorne os dados dos
    clientes que não compram há mais de 1 ano.`)

    clientes.map((cliente) => {
        const ultimaCompraEmMilis = new Date(`${cliente.ultimaCompra[2]}/${cliente.ultimaCompra[1]}/${cliente.ultimaCompra[0]}`).getTime()

        const umAnoEmMilis = 1000 * 60 * 60 * 24 * 365;

        const diferenca = new Date().getTime() - ultimaCompraEmMilis

        if (diferenca > umAnoEmMilis) console.log(cliente)

    })

}

/* TAREFA 12

Implemente uma função que retorne os dados dos
clientes que não compram há mais de 1 ano.

*/

function maisQue15Compras() {

    titulo(12) // Invoca o template de título
    descricao(`Implemente uma função que retorne os dados dos
    clientes que já realizaram mais de 15 compras.`)

    clientes.map((cliente) => {
        const maisQue15 = cliente.totalCompras

        if (15 < maisQue15) console.log(cliente)

    })

}


/* --------- Ativações da Funções de Cada Tarefa --------- */

gerarClientes() ////////////////// TAREFA 1
filtrar('A') ///////////////////// TAREFA 2
listar() ///////////////////////// TAREFA 3
totalRegistros() ///////////////// TAREFA 4
somenteNomes() /////////////////// TAREFA 5
primeiroNome() /////////////////// TAREFA 6
filtrarPrimeiroNome('A') ///////// TAREFA 7
maiores() //////////////////////// TAREFA 8
estaContido("Dr.") /////////////// TAREFA 9
totalCompras() /////////////////// TAREFA 10
naoCompram1Ano() ///////////////// TAREFA 11
maisQue15Compras() /////////////// TAREFA 12

/* ------ Fim das Ativações da Funções de Cada Tarefa ------ */
