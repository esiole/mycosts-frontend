import { IProduct } from "../../../Product";

export interface IProductCategory {
    id: number;
    name: string;
    products: IProduct[];
}
