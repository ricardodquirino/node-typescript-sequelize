import { Column, Model, DataType, Table } from "sequelize-typescript";

@Table
export class Product extends Model<Product>{

    @Column({type: DataType.STRING(60), allowNull: false})
    code: string;
    
    @Column({type: DataType.STRING(60), allowNull: false})
    name: string;
}