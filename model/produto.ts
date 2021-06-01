export class Produto{
    // atributos de Produto
    id: number;
    nome: string;
    preco: number;
    imagem: string;

    public constructor(id ?: number,
        nome ?: string,
        preco ?: number,
        imagem ?: string){
            this.id= id;
            this.nome= nome;
            this.preco = preco;
            this.imagem = imagem;
        }

}