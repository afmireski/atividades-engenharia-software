# Atividade: Princípios do SOLID+2

A atividade consiste em explicar, com exemplos, 4 dos 7 princípios listados abaixo:
* S — Single Responsibility Principle (Princípio da responsabilidade única)
* O — Open-Closed Principle (Princípio Aberto-Fechado)
* L — Liskov Substitution Principle (Princípio da substituição de Liskov)
* I — Interface Segregation Principle (Princípio da Segregação da Interface)
* D — Dependency Inversion Principle (Princípio da inversão da dependência)
* Prefira Composição a Herança
* Demeter


## S - Single Responsibility Principle (Princípio da responsabilidade única)

Uma responsabilidade é tudo aquilo que um certo trecho de código faz, um comportamento, uma ação, um motivo de mudança. Nesse sentido o princípio S estabelece que comportamentos de código que mudam por motivos diferentes devem ser separados entre si.  
Um exemplo é o cálculo de um valor, onde a exibição estará separada do cálculo em si.

Um exemplo de código onde as responsabilidades não estão separadas pode ser visto [aqui](./single-responsability-principle/single-responsability-principle-violado.ts). Nesse exemplo, existe a classe de `Purchase`, Compra, que possuí o método `calculateTotal`, que calcula o total da compra de uma lista de produtos. Porém além dessa responsabilidade ele também exibe o resultado, quebrando o SRP.  
Um contra-exemplo onde o Single Responsability Principle é respeitado pode ser visto [aqui](./single-responsability-principle/single-responsability-principle-respeitado.ts). Nesse exemplo ainda existe a classe `Purchase` com o seu método `calculateTotal`, porém agora ele só possuí uma única responsabilidade, calcular o total da compra.
A responsabilidade de exibir o `total` calculado ficou a cargo de outra classe, `PurchaseConsole`, e de seu método `showTotal`.  
Com essa segunda implementação as cada responsabilidade, ou ação, foi separada.

## I — Interface Segregation Principle (Princípio da Segregação da Interface)

O Interface Segregation Principle (ISP) defende que um recurso não deve depender de algo que ele não necessita, em síntese, cortar o inútil, criando interfaces enxutas, que utilizam só o necessário.  
Essa abordagem possibilita que uma alteração não gere propagações que possam se espalhar por várias partes do código ao seu redor, quebrando várias lógicas.  
Porém é o princípio que deve ser utilizado com cuidado, pois pode-se modularizar tanto ao ponto de que o código fica muito burocrático de ser gerenciado.
- Exemplo com o princípio respeitado [aqui](./interface-segregation-principle/interface-segregation-principle-respeitado.ts)
- Exemplo com o princípio violado [aqui](./interface-segregation-principle/interface-segregation-principle-violado.ts)


## D — Dependency Inversion Principle (Princípio da inversão da dependência)

Numa aplicação diferentes recursos se relacionam entre si. Uma serviço de CRUD de usuário quase certamente utilizará algum meio de comunicação com o banco de dados. Porém elementos do projeto dependerem de recursos específicos acopla muito o código a uma tecnologia em específico. 
Por exemplo, imagine que um ecommerce implementa toda sua regra de compra acoplado a um banco de dados MySQL, porém, em dado momento, é necessário trocar para um banco Oracle. Esse cenário seria um pesadelo.
Assim, o a Inversão de Dependência diz que elementos de alto nível, próximos a lógica, não devem depender, conhecer, os elementos de baixo nível, os recursos, como bancos específicos, e sim, somente suas abstrações, interfaces, o que facilita o desacoplamento.
- Exemplo com o princípio respeitado [aqui](./dependency-inversion/dependency-inversion-respeitado.ts)
- Exemplo com o princípio violado [aqui](./dependency-inversion/dependency-inversion-violado.ts)

## Prefira Composição a Herança

Na década de 80, herança começou a ser tratada como bala de prata para o reúso de código, porém isso acabou gerando acoplamentos indesejáveis entre classes com nível diferente de herança, deixando o código mais carregado e complexo do que precisava ser. Por exemplo A é pai de B e C, que são pai de D. D poderia precisar de algo de B e C mas não necessariamente de A. Herança faz com muitas características desnecessárias sejam transmitidas.
Nesse contexto, é mais interessante usar composição, fazer com que uma classe A que precise de algo de B tenha B como parte de si, sem necessariamente herdar suas características. Isso diminui o acoplamento.
- Exemplo com o princípio respeitado [aqui](./composition-inehitance/composition-inehitance-respeirtado.ts)
- Exemplo com o princípio violado [aqui](./composition-inehitance/composition-inehitance-violado.ts)