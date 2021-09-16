import { Controller, Get } from "@nestjs/common";


@Controller('produtos')
export class ProdutosController {
    
    @Get()
    obterTodos() : string {
        return  'Lista todos os produtos'
    }
}