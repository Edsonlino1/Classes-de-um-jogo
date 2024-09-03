class heroi{
    constructor(nome, idade, tipo){
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    }

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
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

//Aqui você vai substituir os '()' por nome do heroi, idade e de qual classe ele é. Ex: mago, guerreiro, etc..
    let mago = new heroi (); 
    let guerreiro = new heroi();
    let monge = new heroi ();
    let ninja = new heroi ();

   mago.atacar()
   guerreiro.atacar()
   monge.atacar()
   ninja.atacar()