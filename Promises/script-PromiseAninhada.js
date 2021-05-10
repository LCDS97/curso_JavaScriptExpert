var promisse = Promise.resolve(3)
var promisse2 = Promise.resolve(4)
var promisse3 = Promise.resolve(4)

// Caso eu tenho mais promises e cada uma precisa ser aninhada pode se utilizar o conceito de promise.all

Promise.all([promisse, promisse2, promisse3])
    .then(function (values) { // Nesse caso só vai rodar o then se todas as promessas concluiram no then delas

    })

Promise.race([promisse, promisse2, promisse3])
    .then(function (values) {

    })

/* A diferença do Promise race e do all

- Promise All só executada caso as tres concluam suas tarefas(then)

- Promise Race ele retorna o valor de quem conseguiu o then em primeiro e ignora as outras

Exemplo:
    O race vai ser utilizada para uma consulta de API de correios
    Caso um dos 3 serviços esteja indisponivel ou responsa mais rapido só é necessário mostrar quem conseguiu primeiro

    O all você quer utilizar preços de fretes
    E utilizar os retorna de valores de preço qual tem menor valor




*/