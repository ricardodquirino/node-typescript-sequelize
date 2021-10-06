import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Product } from "./product.model";

@Injectable()
export class ProductService {


    constructor(
        @InjectModel(Product) 
        private productModel: typeof Product
        ){}

    async findAll(): Promise<Product[]> {
        return this.productModel.findAll();
    }

    async findById(id: number): Promise<Product>{
       return this.productModel.findByPk(id);
        //this.products.filter(obj => obj.id == id)[0]
    }

    async create(product: Product){
        this.productModel.create(product);
    }

    async change(product: Product): Promise<[number, Product[]]>{
        return this.productModel.update(product, {
            where: {
                id: product.id
            }
        });
    }

    async delete(id: number) {
        const product: Product = await this.findById(id)
        product.destroy();
    } 
}