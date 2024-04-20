/**
 * Esse exemplo tem como objetivo mostrar um código onde o Interface Segregation Principle (Princípio da Segregação da Interface) é respeitado
 */

/** 
 * Aqui as interfaces foram segregadas de forma correta, com veículo ficando somente com o que é comum a todos os veículos.
 * 
*/
interface Veiculo {
    ligar(): void;
    
    desligar(): void;
}

/** 
 * Os comportamentos mais específicos foram separados em outras interfaces
 * 
*/
interface VeiculoAereo extends Veiculo {
    decolar(): void;
}

interface VeiculoAquatico extends Veiculo {
    navegar(): void;
}

class Aviao implements VeiculoAereo {
    desligar(): void {
        throw new Error("Method not implemented.");
    }

    decolar(): void {
        throw new Error("Method not implemented.");
    }

    ligar(): void {
        throw new Error("Method not implemented.");
    }
}

class Navio implements VeiculoAquatico {
    navegar(): void {
        throw new Error("Method not implemented.");
    }

    ligar(): void {
        throw new Error("Method not implemented.");
    }
    
    desligar(): void {
        throw new Error("Method not implemented.");
    }
}