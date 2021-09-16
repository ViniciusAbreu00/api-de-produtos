import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Produto } from "./produto.model";

@Controller('produtos')
export class ProdutosController {
    produtos: Produto[] = [
        new Produto("LIV001", "Livro de TDD e BDD na prática", 29.5),
        new Produto("LIV002", "Livro BRIMBA", 45.3),
        new Produto("LIV003", "Livro Brerbss", 25.5)
    ]
    
    @Get()
    obterTodos() : Produto[]{
        return  this.produtos
    }
    @Get(':id')
    obterUm(@Param() params): Produto {
        return this.produtos[0]
    }

    @Post()
    criar(@Body() produto: Produto){
        produto.id = 100
        this.produtos.push(produto)
    }

    @Put()
    alterar(@Body() produto): Produto{
        return produto;
    }

    @Delete(':id')
    apagar(@Param() params){
        this.produtos.pop();
    }
}