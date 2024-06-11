import DataUtil from "./DataUtil";

class Pessoa {
    nome: string;
    email: string;
    nasc: Date;

    constructor(nome: string, email: string, nasc: Date) {
        this.nome = nome;
        this.email = email;
        this.nasc = nasc;
    }

    imprimir(): void {
        console.log("Nome: " + this.nome);
        console.log("e-Mail: " + this.email);
        console.log("Data Nasc.: " + this.nasc);
        console.log("Idade: " + this.idade() + " anos");
        console.log("Anos Bissextos: "+this.numBissextos());
    }

    public idade(): number {
        const hoje = new Date();
        let idade: number = hoje.getFullYear() - this.nasc.getFullYear();
        const m: number = hoje.getMonth() - this.nasc.getMonth();

        if (m < 0 || (m === 0 && hoje.getDate() < this.nasc.getDate())) {
            idade--;
        }

        return idade;
    }

    public numBissextos(){
        const ano: number = this.nasc.getFullYear();
        const hoje = new Date();
        const anoatual = hoje.getFullYear();
        let quant:number = 0;

        for (let x=ano;x<=anoatual;x++){
            if (DataUtil.isBissexto(x)){
//                console.log(x);
                quant++
            }
        }
        return quant;
    }
}

export default Pessoa;