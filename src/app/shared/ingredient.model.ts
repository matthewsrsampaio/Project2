//Criando automaticamente as variáveis e o construtor em typescript
//dentro dos parametro do construtor coloque public antes das variáveis e todo o resto será
//feito automaticamente

export class Ingredient {
  // public name : string;
  // public amount : number;

  constructor(public name: string, public amount: number) {
    // this.name = name;
    // this.amount = amount;
  }
}
