// liga-se ao arquivo html lista_clientes.html e é exportado para listaCliente-controller.js
const listaClientes = () => {
    // por padrão fetch() realiza uma requisão do tipo get
    return fetch(`http://localhost:3000/profile`)
        .then( resposta => {
            if(resposta.ok) {
                return resposta.json()
            }
            throw new Error ('Não foi possível listar os clientes')
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
        if(resposta.ok) {
            return resposta.body
        }
        throw new Error ('Não foi possível criar um cliente')
    })
}

const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    }).then(resposta => {
        if(resposta.ok) {
            throw new Error('Não foi possível remover um cliente')
        }
    })
}

const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
        .then( resposta => {
            if(resposta.ok) {
                return resposta.json()
            }
            throw new Error('Não foi possível detalhar um cliente')
        })
}

const atualizaCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then( resposta => {
        if(resposta.ok) {
            return resposta.json()
        }
        throw new Error('Não foi possível atualizar um cliente')
    })
}

export const clienteService = {
    listaClientes,
    criaCliente,
    removeCliente, 
    detalhaCliente,
    atualizaCliente
}