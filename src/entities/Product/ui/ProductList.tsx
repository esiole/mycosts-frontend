import { IProduct } from "../model/types/product";
import { ProductListItem } from "./ProductListItem";

type ProductListProps = {
    products: IProduct[];
};

export const ProductList = ({ products }: ProductListProps) => {
    return (
        <>
            {products.map((p) => (
                <ProductListItem key={p.id} product={p} />
            ))}
        </>
    );
};
