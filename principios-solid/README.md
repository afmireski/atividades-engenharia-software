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

## D — Dependency Inversion Principle (Princípio da inversão da dependência)

## Prefira Composição a Herança