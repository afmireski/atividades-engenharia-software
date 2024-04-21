/**
 * Esse exemplo tem como objetivo mostrar um techo de código onde o uso de herança ao invés de composição não faz muito sentido
 */

/**
 * Uma pilha e um array são similares em alguns aspectos, porém não necessariamente fazem as mesmas operações da mesma maneira.
 * 
 */
class Stack<T> extends Array<T> {

}

const stack = new Stack<number>();