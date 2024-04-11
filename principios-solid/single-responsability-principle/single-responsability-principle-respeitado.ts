/**
 * Esse exemplo tem como objetivo calcular o valor total de uma compra e exibi-lo
 * Porem ele respeita o Single Responsibility Principle (Princípio da responsabilidade única)
 */

type Product = {
    name: string;
    quantity: number;
    price: number;
}

class Purchase {
    private total: number;

    constructor(private products: Product[]) {}

    calculateTotal(): number {
        // Agora o método possuí uma única responsabilidade, somente calculando o total da compra
        this.total = this.products.reduce((total, product) => total + (product.price * product.quantity), 0);

        return this.total;
    }
}

class PurchaseConsole {
    showTotal(total: number): void {
        // A responsabilidade de exibir o total fica a cargo de outro método
        console.log("O total da compra é:", total);
    }
}