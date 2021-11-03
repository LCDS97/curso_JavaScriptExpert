## Stubs

Stubs são dados estáticos para substituir comportamentos de sistemas por objetos estáticos, onde também são criados varios mocks para cada cenário específico

Se os testes forem baseados em um servidor externo e esse serviço caí, os testes param de funcionar, toda e qualquer alteração não é aprovado devido os testes estarem falhando

Usando stub subistitui o comportamento da função.

Por exemplo em vez da função olha um serviço na web, olha primeiramente para o dado mocado referente aquela situação da função.

### Para pegar um valor de saída de uma requisição de um serviço:
```
node service.test.js > mocks/tatooine.json
```
1 - Ira executar o arquivo de teste.
2 - Com o ">" você esta direcionando a saída do arquivo de teste para o atributo a seguir
3 - Caminho do arquivo onde sera armazenado valor do teste

OBS: No windows é necessário declarar que o node é um executável, ou seja logo após o node colocar a extensão ("node.exe[...]")
