/**
 * Esse exemplo tem como objetivo mostrar um techo de código onde o uso de composição no
 * lugar da herança faz mais sentido
 */

/**
 * Uma pilha e um array são similares em alguns aspectos, porém 
 * não necessariamente fazem as mesmas operações da mesma maneira.
 * Se o array for só o meio onde os elementos da pilha são armazenados
 * haverá mais liberdade para implementar a lógica de forma que se assemelhe
 * mais ao comportamento padrão de uma pilha.
 */
class Stack<T> {
    private elements: Array<T>;
}

const stack = new Stack<number>();