import Pessoa from "./Pessoa";

class Cliente extends Pessoa{

    saldo: number;

    constructor(nome: string, email: string, nasc: Date, saldo: number) {
        super(nome, email, nasc);
        this.saldo = saldo;
    }

    public imprimir():void{
        super.imprimir();
        console.log("Saldo: "+this.saldo);
    }
}

export default Cliente;