/**
 * Esse exemplo tem como objetivo mostrar um código onde o Dependency Inversion Principle (Princípio da inversão da dependência) é respeitado
 * Fonte: https://blog.logrocket.com/dependency-inversion-principle-typescript/
 */

// Elemento de alto nível onde está a lógica
class ShoppingCartService {
    // Depende da abstração, não da implementação
    constructor(private paymentProcessor: PaymentProcessor) {}
  
    checkout(cart: ShoppingCart) {
      return this.paymentProcessor.processPayment(cart);
    }
  }
    
  // Abstração
  interface PaymentProcessor {
    processPayment(cart: ShoppingCart): boolean;
  }
  
  // Implementação da abstração
  class StripePaymentProcessor implements PaymentProcessor {
    processPayment(cart: ShoppingCart): boolean {
    }
  }
  
  // Instancia a regra passando a implementação correta
  const shoppingCartService = new ShoppingCartService(new StripePaymentProcessor());