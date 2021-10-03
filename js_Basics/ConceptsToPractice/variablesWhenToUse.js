// ANCHOR Variables JS

// SECTION Var e Let dentro da função
const sayHello = () => {
    // NOTE Essa variavel só existe dentro da função
    var age = 13;
    if (age == 13) {
    // NOTE Com declaração da variavel var varíavel não é bloqueante entre as chaves e pode pegar o valor externo
        var name = "Pedro";
    }
    // NOTE Consegue printar
    console.log(name);
}
const sayHello2 = () => {
    // NOTE Essa variavel só existe dentro da função
    var age2 = 13;
    if (age2 == 13) {
        // NOTE Com declaração da variavel let essa varíavel é bloqueante entre as chaves e não consegue pegar o valor externo
        let name2 = "Pedro";
    }
    // NOTE Da erro!
    console.log(name2);
}

sayHello();
sayHello2();