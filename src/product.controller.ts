import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Product } from './product.model';
import { ProductService } from "./product.service";

@Controller('products')
export class ProductController {

    constructor(private productService: ProductService){

    }

    @Get()
    async findAll(): Promise<Product[]> {
        return this.productService.findAll();
    }

    @Get(':id')
    async findById(@Param() params): Promise<Product>{
        return this.productService.findById(params.id);
    }

    @Post()
    async create(@Body() product: Product) {
        //product.id = 100;
        this.productService.create(product);
    } 

    @Put()
    async change(@Body() product): Promise<[number, Product[]]>{
        return this.productService.change(product)
    }

    @Delete(':id')
    async delete(@Param() params) {
        this.productService.delete(params.id)
    }
}