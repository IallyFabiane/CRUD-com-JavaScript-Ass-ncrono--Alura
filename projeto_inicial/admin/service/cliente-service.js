// liga-se ao arquivo html lista_clientes.html e é exportado para listaCliente-controller.js
const listaClientes = () => {
    // por padrão fetch() realiza uma requisão do tipo get
    return fetch(`http://localhost:3000/profile`)
        .then( resposta => {
             return resposta.json()
        })
}

// liga-se ao arquivo html casdastra_cliente.html e é exportado para cadastraCliente-controller.js
const criaCliente = (nome, email) => {
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then( resposta => {
        return resposta.body
    })
}

const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    })
}

export const clienteService = {
    listaClientes,
    criaCliente,
    removeCliente
}