/**
 * Esse exemplo tem como objetivo calcular o valor total de uma compra e exibi-lo
 * Porém ele fere o Single Responsibility Principle (Princípio da responsabilidade única)
 */

type Product = {
    name: string;
    quantity: number;
    price: number;
}

class Purchase {
    private total: number;

    constructor(private products: Product[]) {}

    calculateTotal(): void {
        // Esse método possuí duas responsabilidades, ele calcula o valor total e o exibe
        this.total = this.products.reduce((total, product) => total + (product.price * product.quantity), 0);

        console.log("O total da compra é:", this.total);
    }
}