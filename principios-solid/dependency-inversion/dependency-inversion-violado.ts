/**
 * Esse exemplo tem como objetivo mostrar um código onde o Dependency Inversion Principle (Princípio da inversão da dependência) é respeitado
 * Fonte: https://blog.logrocket.com/dependency-inversion-principle-typescript/
 */

// Elemento de alto nível onde está a lógica
class ShoppingCartService {
    // Depende diretamente de um recurso externo
    // Se um dia ele mudar talvez toda a lógica tenha que ser refeita
    constructor(private paymentProcessor: StripePaymentProcessor) {}
  
    checkout(cart: ShoppingCart) {
      return this.paymentProcessor.processPayment(cart);
    }
  }
      
  // Recurso externo que processa o pagamento
  class StripePaymentProcessor {
    processPayment(cart: ShoppingCart): boolean {
    }
  }
  
  // Instancia a regra passando a implementação específica
  // Não aceitaria outra implementação
  const shoppingCartService = new ShoppingCartService(new StripePaymentProcessor());