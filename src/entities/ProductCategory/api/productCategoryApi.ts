import { getAsync, postAsync } from "../../../shared/api/axios";
import { IProductCategory } from "../model/types/productCategory";
import { PRODUCT_CATEGORIES_PATH } from "../../../shared/config/api";
import { ProductCategoryFormFields } from "../model/types/productCategoryFormFields";

export const addProductCategory = async (productCategory: ProductCategoryFormFields) =>
    await postAsync<ProductCategoryFormFields, IProductCategory>(
        PRODUCT_CATEGORIES_PATH,
        productCategory,
    );

export const getProductCategories = async () =>
    await getAsync<IProductCategory[]>(PRODUCT_CATEGORIES_PATH);
