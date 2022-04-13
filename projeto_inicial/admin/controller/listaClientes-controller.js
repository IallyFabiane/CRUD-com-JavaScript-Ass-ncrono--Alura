import { clienteService } from '../service/cliente-service.js'
// função para guardar a linha a ser inserida no corpo da tabela do arquivo HTML lista_cliente.html
const criaNovaLinha = (nome, email) => {
    const linhaNovoCliente = document.createElement('tr'); //criando a linha na tabela HTML
    const conteudo = `
    <td class="td" data-td>${nome}</td>
                <td>${email}</td>
                <td>
                    <ul class="tabela__botoes-controle">
                        <li><a href="../telas/edita_cliente.html" class="botao-simples botao-simples--editar">Editar</a></li>
                        <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
                    </ul>
                </td> 
                `
    linhaNovoCliente.innerHTML = conteudo; //inserindo o conteúdo na linha da tabela

    return linhaNovoCliente;
}

const tabela = document.querySelector('[data-tabela]') //requisitando o elemento HTML com o data-attribute data-tabela

clienteService.listaClientes() //chamada da função
.then(data => { // retorno da promessa
            data.forEach(elemento => {
                tabela.appendChild(criaNovaLinha(elemento.nome, elemento.email))
                // iterando o objeto com o método forEach() e adicionando a função criaNovaLinha(que cria <tr>) ao elemento pai <tbody> com o método appendChild()
       })
})