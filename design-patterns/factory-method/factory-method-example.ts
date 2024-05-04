interface Carga {}

class Caixa implements Carga {}

class Conteiner implements Carga {}

interface Transporte {
	entregar(): Carga;
}

class Caminhao implements Transporte {
	entregar(): Carga {
        return new Caixa();
    }
}

class Barco implements Transporte {
	entregar(): Carga {
        return new Conteiner();
    }
}

interface Logistica {
    // Método fábrica
    criarTransporte(): Transporte;
}

class LogisticaTerreste implements Logistica {
    // Implementação do método fábrica para Logística Terreste
    criarTransporte(): Transporte {
        return new Caminhao();
    }
}

class LogisticaMaritima implements Logistica {
    // Implementação do método fábrica para Logística Terreste
    criarTransporte(): Transporte {
        return new Barco();
    }
}

enum TipoLogistica {
    TERRESTRE = 'terrestre',
    MARITIMA = 'maritima'
}

// Essa é a classe  fábrica que escolhe a implementação desejada
class LogisticaFactory {
	static create(logistica: TipoLogistica): Logistica {
		if (logistica === TipoLogistica.TERRESTRE) return new LogisticaTerreste();
		else if (logistica === TipoLogistica.MARITIMA) return new LogisticaMaritima();	
		else throw new Error('Logística não implementada');
    }
}

function main() {
	// ...
	let logistica: Logistica = LogisticaFactory.create(TipoLogistica.TERRESTRE);

    let transporte: Transporte = logistica.criarTransporte();

    let carga: Carga = transporte.entregar();
	// ...
}