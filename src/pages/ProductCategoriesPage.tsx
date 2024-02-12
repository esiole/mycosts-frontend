import { getProductCategories, ProductCategoryList } from "../entities/ProductCategory";
import { useApiRequest } from "../shared/lib/hooks/useApiRequest";

const ProductCategoriesPage = () => {
    const [productCategories] = useApiRequest(getProductCategories);

    return (
        <div>
            Product categories page
            <ProductCategoryList categories={productCategories || []} />
        </div>
    );
};

export default ProductCategoriesPage;
