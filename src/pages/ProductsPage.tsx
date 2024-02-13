import { useApiRequest } from "../shared/lib/hooks/useApiRequest";
import { getProducts, ProductList } from "../entities/Product";

const ProductsPage = () => {
    const [products] = useApiRequest(getProducts);

    return (
        <div>
            <div>Products page</div>
            <ProductList products={products || []} />
        </div>
    );
};

export default ProductsPage;
