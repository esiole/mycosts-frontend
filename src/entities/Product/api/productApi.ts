import { getAsync, postAsync } from "../../../shared/api/axios";
import { IProduct } from "../model/types/product";
import { PRODUCTS_PATH } from "../../../shared/config/api";
import { ProductEditModel } from "../model/types/productEditModel";

export const addProduct = async (product: ProductEditModel) =>
    await postAsync<ProductEditModel, IProduct>(PRODUCTS_PATH, product);

export const getProducts = async () => await getAsync<IProduct[]>(PRODUCTS_PATH);
