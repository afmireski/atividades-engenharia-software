/**
 * Iterator Design Pattern
 * Fonte: https://refactoring.guru/pt-br/design-patterns/iterator/typescript/example
 * 
 */

interface Iterator<T> {
    // Retorna o elemento atual
    current(): T;

    // Retorna o elemento atual e itera para o próximo elemtno
    next(): T;

    // Retorna a chave referente ao elemento atual
    key(): number;

    // Verifica se o iterador está numa posição válida
    valid(): boolean;

    // Volta o iterador para o primeiro elemento
    rewind(): void;
}

interface Aggregator {
    // Busca um iterador qualquer
    getIterator(): Iterator<string>;
}

/**
 * Implementações de iteradores implementam diferentes algoritmos de travessia
 */

class AlphabeticalOrderIterator implements Iterator<string> {
    private collection: WordsCollection;

    /**
     * Posição atual em que o Iterador se encontra
     */
    private position: number = 0;

    /**
     * Indica a direção que o iterador irá percorrer
     */
    private reverse: boolean = false;

    constructor(collection: WordsCollection, reverse: boolean = false) {
        this.collection = collection;
        this.reverse = reverse;

        if (reverse) {
            this.position = collection.getCount() - 1;
        }
    }

    public rewind() {
        this.position = this.reverse ?
            this.collection.getCount() - 1 :
            0;
    }

    public current(): string {
        return this.collection.getItems()[this.position];
    }

    public key(): number {
        return this.position;
    }

    public next(): string {
        const item = this.collection.getItems()[this.position];
        this.position += this.reverse ? -1 : 1;
        return item;
    }

    public valid(): boolean {
        if (this.reverse) {
            return this.position >= 0;
        }

        return this.position < this.collection.getCount();
    }
}

/**
 * Implementação das coleções possibilitam escolher dentre os diversos iteradores
 */
class WordsCollection implements Aggregator {
    private items: string[] = [];

    public getItems(): string[] {
        return this.items;
    }

    public getCount(): number {
        return this.items.length;
    }

    public addItem(item: string): void {
        this.items.push(item);
    }

    public getIterator(): Iterator<string> {
        return new AlphabeticalOrderIterator(this);
    }

    public getReverseIterator(): Iterator<string> {
        return new AlphabeticalOrderIterator(this, true);
    }
}

/**
 * O cliente pode ter conhecimento ou não dos diversos iteradores existentes
 */
const collection = new WordsCollection();
collection.addItem('First');
collection.addItem('Second');
collection.addItem('Third');

const iterator = collection.getIterator();

console.log('Straight traversal:');
while (iterator.valid()) {
    console.log(iterator.next());
}

console.log('');
console.log('Reverse traversal:');
const reverseIterator = collection.getReverseIterator();
while (reverseIterator.valid()) {
    console.log(reverseIterator.next());
}