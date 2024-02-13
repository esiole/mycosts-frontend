import { getProductCategories, ProductCategoryList } from "../entities/ProductCategory";
import { useApiRequest } from "../shared/lib/hooks/useApiRequest";
import { AddProductCategoryButton } from "../features/AddProductCategory";

const ProductCategoriesPage = () => {
    const [productCategories] = useApiRequest(getProductCategories);

    return (
        <div>
            <div>Product categories page</div>
            <div>
                <AddProductCategoryButton />
            </div>
            <ProductCategoryList categories={productCategories || []} />
        </div>
    );
};

export default ProductCategoriesPage;
