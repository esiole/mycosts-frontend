import { getAsync } from "../../../shared/api/axios";
import { IProductCategory } from "../model/types/productCategory";
import { PRODUCT_CATEGORIES_PATH } from "../../../shared/config/api";

export const getProductCategories = async () =>
    await getAsync<IProductCategory[]>(PRODUCT_CATEGORIES_PATH);
