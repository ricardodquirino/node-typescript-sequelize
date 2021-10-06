import { Injectable } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductService {

    products: Product[] = [
        // new Product('S1233', 'Sardinha verder vegetal 64'),
        // new Product('S1232', 'Sardinha vermelha vegetal 43'),
        // new Product('S1234', 'Sardinha azul vegetal 23'),
    ]

    findAll(): Product[] {
        return this.products
    }

    findById(id: number): Product{
       return null
        //this.products.filter(obj => obj.id == id)[0]
    }

    create(product: Product){
        this.products.push(product)
    }

    change(product: Product){
        return product
    }

    delete(id: number) {
        //this.products = this.products.filter(obj => obj.id != id);
    } 
}