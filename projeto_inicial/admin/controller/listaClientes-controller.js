import { clienteService } from '../service/cliente-service.js'
// função para guardar a linha a ser inserida no corpo da tabela do arquivo HTML lista_cliente.html
const criaNovaLinha = (nome, email, id) => {
    const linhaNovoCliente = document.createElement('tr'); //criando a linha na tabela HTML
    const conteudo = `
    <td class="td" data-td>${nome}</td>
                <td>${email}</td>
                <td>
                    <ul class="tabela__botoes-controle">
                        <li><a href="../telas/edita_cliente.html?id=${id}" class="botao-simples botao-simples--editar">Editar</a></li>
                        <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                    </ul>
                </td> 
                `
    linhaNovoCliente.innerHTML = conteudo; //inserindo o conteúdo na linha da tabela
    linhaNovoCliente.dataset.id = id //criando um data-attribute 
    return linhaNovoCliente;
}

const tabela = document.querySelector('[data-tabela]') //requisitando o elemento HTML com o data-attribute data-tabela
tabela.addEventListener('click', async (evento) => {
   let ehBotaoDeletar =  evento.target.className === 'botao-simples botao-simples--excluir'
   if(ehBotaoDeletar) {
       try {
            const linhaCliente = evento.target.closest('[data-id]') //buscando o elemento pai mais próximo do alvo do evento
            let id = linhaCliente.dataset.id
            await clienteService.removeCliente(id)
            linhaCliente.remove()
       }
       catch(erro) {
        console.log(erro)
        window.location.href = '../telas/erro.html'
       }
   }
})

const render = async () => {
    try {
        const listaClientes = await clienteService.listaClientes() //chamada da função
            listaClientes.forEach(elemento => {
            tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email, elemento.id))
            // iterando o objeto com o método forEach() e adicionando a função criaNovaLinha(que cria <tr>) ao elemento pai <tbody> com o método appendChild()
        })
    } catch(erro) {
        console.log(erro)
        window.location.href= '../telas/erro.html'
    }
}

render()