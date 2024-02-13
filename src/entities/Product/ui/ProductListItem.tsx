import { IProduct } from "../model/types/product";

type ProductListItemProps = {
    product: IProduct;
};

export const ProductListItem = ({ product }: ProductListItemProps) => {
    return (
        <div>
            {product.id}. {product.name}
        </div>
    );
};
