const http = new XMLHttpRequest() //Inicializando o objeto XMLHttpRequest
http.open('GET', 'http://localhost:3000/profile') //abrir a comunicação entre a aplicação e a API
http.send() //enviando a requisição
//o que vou fazer com a resposta que o servidor (requisição AJAX) me enviar de volta. No caso do onload, ao carregar a página
http.onload = () => {
    const data = http.response
    console.log(data)
}