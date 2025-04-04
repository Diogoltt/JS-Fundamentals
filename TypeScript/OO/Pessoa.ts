export class Pessoa {
    // Encapsulamento
    private nome: string;
    private idade: number;

    // Construtor para inicializar as propriedades
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    // Getters & Setters para ter acesso às propriedades privates
    public getNome(): string {
        return this.nome;
    }
    public setNome(nome: string): void {
        if (nome.length < 3) {
            throw new Error("Nome deve ter mais de 3 caracteres");
        }
        this.nome = nome;
    }

    public getIdade(): number {
        return this.idade;
    }
    public setIdade(idade: number): void {
        this.idade = idade;
    }
}