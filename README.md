
#Resolução do Desáfio de Classes de um heroi
Esse desafio foi um pouco desafiador para mim, tive que refazer algumas vezes para conseguir funcionar. Mas foi esse desafio que me fez aprender de verdade como utilizar classes e objetos. Vou explicar resumidamente a resolução.

###Comecei criando uma classe que guardasse: nome, idade e tipo, exatamente dessa forma.

class heroi{
    constructor(nome, idade, tipo){
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    }

###Em seguida criei o objeto “atacar” para estrutura de decisão utilizando (switch, case), que visa apontar o tipo de ataque de cada herói, por exemplo: Se o mago atacar, ele utilizou mágia, de acordo com a resolução abaixo.

atacar(){
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break; 
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                    ataque = 'usou um ataque superior';
                
        }
###Defeni o “console.log” para imprimir a frase utilizando a estrutura abaixo. Também criei mais quatro variáveis para guardar os dados dos heróis utilizando ‘new’. Em seguida pedi para imprimir quatro frases referente a cada herói e seu poder.

console.log(`O ${this.tipo} atacou usando ${ataque}`);
    
//Aqui você vai substituir os '()' por nome do heroi, idade e de qual classe ele é. Ex: mago, guerreiro, etc..
    let mago = new heroi (); 
    let guerreiro = new heroi();
    let monge = new heroi ();
    let ninja = new heroi ();

   mago.atacar()
   guerreiro.atacar()
   monge.atacar()
   ninja.atacar()
