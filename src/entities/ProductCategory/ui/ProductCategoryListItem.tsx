import { IProductCategory } from "../model/types/productCategory";

type ProductCategoryListItemProps = {
    category: IProductCategory;
};

export const ProductCategoryListItem = ({ category }: ProductCategoryListItemProps) => {
    return (
        <div>
            {category.id}. {category.name}
        </div>
    );
};
