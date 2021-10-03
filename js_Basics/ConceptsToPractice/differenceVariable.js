// ANCHOR Diferença entre mudanças de varíaveis VAR e LET

// SECTION VAR
// NOTE Quando a variavel é declarada ela pode ser mudada chamando novamente a mesma var e redeclarar o seu valor
var nameVar = "Pedro";
var nameVar = "Lucas";
// !SECTION


// SECTION LET
// NOTE Com a variavel let para redeclarar seu valor somente precisa chamar o nome da varíavel e declarar seu novo valor
let nameLet = "Pedrinho";
nameLet = "Luquinhas";


// NOTE É mais recomendado usar mais o let por questões de você garantir somente o acesso dessa varíavel na função que é colocada, além de você ter o poder de controle o valor de sua varíavel
// !SECTION


// SECTION CONST
// NOTE Em constantes você não consegue mudar seu valor, seu valor é fixo
const nameConst = "Pedriques";

// NOTE Mas em constantes, caso ele seja um objeto você, pode mutuar os objetos apesar de ele ser uma constante
const personConst = { name: "Alguem!" };
// NOTE Adicionando objeto;
personConst.age = 23;

console.log(personConst)
