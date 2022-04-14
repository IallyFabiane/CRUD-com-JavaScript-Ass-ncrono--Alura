import { clienteService } from "../service/cliente-service.js"

const pegaURL = new URL(window.location) //objeto URL recebendo window.location que mostra onde eu estou na tela se utilizarmos o console.log() para vizualizarmos, por exemplo

const id = pegaURL.searchParams.get('id') // propriedade searchParams do protótipo do objeto URL; utilizamos o get para pegar o id

const inputNome = document.querySelector('[data-nome]') // capturando o imput nome
const inputEmail = document.querySelector('[data-email]') // capturando o imput email

clienteService.detalhaCliente(id)
.then( dados => {
    inputNome.value = dados.nome // valor que pegamos da API
    inputEmail.value = dados.email // valor que pegamos da API
})

const formulario = document.querySelector('[data-form]') //capturando o formulário através do data-attribute

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()  //previnindo o formulário de ser executado antes do código abaixo

    clienteService.atualizaCliente(id, inputNome.value,inputEmail.value)
    .then(() => {
        window.location.href = '../telas/edicao_concluida.html'
    })
})