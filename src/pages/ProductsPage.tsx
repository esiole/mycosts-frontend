import { useApiRequest } from "../shared/lib/hooks/useApiRequest";
import { getProducts, ProductList } from "../entities/Product";
import { AddProductButton } from "../features/AddProduct";

const ProductsPage = () => {
    const [products] = useApiRequest(getProducts);

    return (
        <div>
            <div>Products page</div>
            <div>
                <AddProductButton />
            </div>
            <ProductList products={products || []} />
        </div>
    );
};

export default ProductsPage;
