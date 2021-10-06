import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Product } from './product.model';
import { ProductService } from "./product.service";

@Controller('products')
export class ProductController {

    constructor(private productService: ProductService){

    }

    @Get()
    findAll(): Product[] {
        return this.productService.findAll();
    }

    @Get(':id')
    findById(@Param() params): Product{
        return this.productService.findById(params.id);
    }

    @Post()
    create(@Body() product: Product) {
        //product.id = 100;
        this.productService.create(product);
    } 

    @Put()
    change(@Body() product) {
        return this.productService.change(product)
    }

    @Delete(':id')
    delete(@Param() params) {
        this.productService.delete(params.id)
    }
}