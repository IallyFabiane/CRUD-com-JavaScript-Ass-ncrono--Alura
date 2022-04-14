import { clienteService } from "../service/cliente-service.js"

const pegaURL = new URL(window.location) //objeto URL recebendo window.location que mostra onde eu estou na tela se utilizarmos o console.log() para vizualizarmos, por exemplo

const id = pegaURL.searchParams.get('id') // propriedade do protótipo do objeto URL

const inputNome = document.querySelector('[data-nome]') // capturando o imput nome
const inputEmail = document.querySelector('[data-email]') // capturando o imput email

clienteService.detalhaCliente(id)
.then( dados => {
    inputNome.value = dados.nome // valor que pegamos da API
    inputEmail.value = dados.email // valor que pegamos da API
})