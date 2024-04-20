/**
 * Esse exemplo tem como objetivo mostrar um código onde o Interface Segregation Principle (Princípio da Segregação da Interface) é ferido
 */


/** 
 * Essa interface está sobrecarregada com comportamentos desnecessários, nem todo veículo decola, da mesma forma que nem todo veículo navega.
*/
interface Veiculo {
    ligar(): void;
    
    desligar(): void;

    decolar(): void;

    navegar(): void;
}