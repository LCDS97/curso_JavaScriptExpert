const ul = document.getElementById('users')
const url = 'https://jsonplaceholder.typicode.com/users'

// Exemplo para um modelo JSON implementado a promise
// A promise pode ser utilizada aninhada

fetch(url)
    .then((resp) => resp.json()) // Aguardar json do jsonplaceholder
    .then(function (data) { // Depois de ter esse dado é feito em sequencia esse then
        console.log(data)

        // Criando lista de usuário
        return data.map(function (user) {
            let li = document.createElement('li');
            li.innerHTML = `${user.name} (${user.username})`;
            ul.appendChild(li);
        })
    })
    .catch((error) => {
        console.log('Corrigi isso ae meu ' + error)
    })