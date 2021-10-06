import { Model } from "sequelize";
import { Column, DataType, Table } from "sequelize-typescript";

@Table
export class Product extends Model{

    @Column({type: DataType.STRING(60), allowNull: false})
    code: string;
    
    @Column({type: DataType.STRING(60), allowNull: false})
    name: string;

    // constructor(code: string, name: string) {
    //     this.code = code;
    //     this.name = name;
    // }
}