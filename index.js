const faker = require('faker')
faker.locale = 'pt_BR'

/* TAREFA 1

Mockar a criação dos objetos respeitando os seguintes requisitos:
    - Os dados devem estar em pt_BR;
    - Os dados devem ser coerentes com os seus campos.
    - As datas de nascimento devem ser entre 1910 a 2019.
    - Os nomes devem ser nomes completos.

*/

const clientes = []

for (i = 0; i < 5; i++) {

    const nome = faker.name.findName()
    const nascimento = faker.date.past(109, 2019).getFullYear()
    const genero = faker.name.gender(nome)
    const ultimaCompra = faker.date.recent(2021).getFullYear()
    const valorCompra = faker.finance.amount()

    cliente = {
        nome,
        nascimento,
        genero,
        ultimaCompra,
        valorCompra
    }
    clientes.push(cliente)
}

/* TAREFA 2:

Desenvolva, utilizando filter, uma função que,
dado um caractere de entrada, retorne todos os
registros de clientes cujo o nome inicia com o
caractere.

*/

function filtrar(letra) {
    clientes.filter((cliente) => cliente.nome.slice(0, 1) == letra)
    console.log(clientes.filter((cliente) => cliente.nome.slice(0, 1) == letra))
}

/* TAREFA 3

Retorne o array de clientes

*/


function listar() {
    console.log(clientes)
}

/* TAREFA 4

Desenvolva uma função que, dado o caractere de entrada,
retorna apenas um número com o total de registros
encontrados.

*/

function totalRegistros() {
    console.log(`O total de registros encontrados até o momento são ${clientes.length}`)
}

/* TAREFA 5

Desenvolva uma função que retorne apenas os nomes dos
clientes.

*/

function somenteNomes() {
    clientes.map((cliente, indice) => console.log(`${indice + 1}. ${cliente.nome}`))
}

/* TAREFA 6

Desenvolva uma função que retorne apenas o primeiro
nome dos clientes.

*/

function primeiroNome() {
    clientes.map(function (cliente, indice) {
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
    console.log(clientes.filter((cliente) => (2019 - cliente.nascimento) >= 18))
}

/* TAREFA 9

Desenvolva uma função que, dado um nome de entrada, retorna
se o nome está contido na lista.

*/

import estaContido from "./tarefa9.mjs";
/* const estaContido = require("./desafio9.js") */


filtrar('A') ///////////////////// TAREFA 2
listar() ///////////////////////// TAREFA 3
totalRegistros() ///////////////// TAREFA 4
somenteNomes() /////////////////// TAREFA 5
primeiroNome() /////////////////// TAREFA 6
filtrarPrimeiroNome('A') ///////// TAREFA 7
maiores() //////////////////////// TAREFA 8
estaContido("Dr.") /////////////// TAREFA 9