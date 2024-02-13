import { getAsync } from "../../../shared/api/axios";
import { IProduct } from "../model/types/product";
import { PRODUCTS_PATH } from "../../../shared/config/api";

export const getProducts = async () => await getAsync<IProduct[]>(PRODUCTS_PATH);
