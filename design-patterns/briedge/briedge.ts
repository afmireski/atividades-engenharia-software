// Implementação
interface Cor {
    getNome(): string;
}

// Implementação Concreta
class Vermelho implements Cor {
    private readonly nome;
    constructor() {
        this.nome = 'Vermelho';
    }

    getNome(): string {
        return this.nome;
    }
}

// Implementação Concreta
class Azul implements Cor {
    private readonly nome;
    constructor() {
        this.nome = 'Azul';
    }

    getNome(): string {
        return this.nome;
    }
}


// Abstração
abstract class Forma {
    // Forma é composta por um atributo cor
    constructor(private cor: Cor) {} // Composição

    public getCor() : Cor {
        return this.cor;
    }
    
}

// Abstração concreta
class Circulo extends Forma {
}

// Abstração concreta
class Quadrado extends Forma {
}

function main() {
    let vermelho: Cor = new Vermelho();
    let azul: Cor = new Azul();

    let circuloVermelho: Forma = new Circulo(vermelho);
    let quadradoAzul: Forma = new Quadrado(azul);

    console.log(`O círculo é ${circuloVermelho.getCor().getNome()}`);
    console.log(`O quadrado é ${quadradoAzul.getCor().getNome()}`);    
}
