import { clienteService } from "../service/cliente-service.js"

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit', (evento) => {
    //percorrendo a árvore DOM do elemento formulario. Obs.: não percorremos com document porque já estamos no branch da árvore que queremos acessar
    evento.preventDefault() //previnindo o comportamento padrão do formulário de enviar os dados se checar o que está dentro da função
    const nome = evento.target.querySelector('[data-nome').value
    const email = evento.target.querySelector('[data-email]').value

    clienteService.criaCliente(nome, email)
    .then(() => {
        //retorna uma promise que é executada após percorrer a árvore DOM de window -> localização atual 
        window.location.href = '../telas/cadastro_concluido.html'
    })
})