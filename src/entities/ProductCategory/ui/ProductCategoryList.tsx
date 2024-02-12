import { IProductCategory } from "../model/types/productCategory";
import { ProductCategoryListItem } from "./ProductCategoryListItem";

type ProductCategoryListProps = {
    categories: IProductCategory[];
};

export const ProductCategoryList = ({ categories }: ProductCategoryListProps) => {
    return (
        <>
            {categories.map((c) => (
                <ProductCategoryListItem key={c.id} category={c} />
            ))}
        </>
    );
};
