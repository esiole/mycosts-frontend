import { ProductFormFields } from "../model/types/productFormFields";
import { ProductEditModel } from "../model/types/productEditModel";

export const toProductEditModel = (model: ProductFormFields): ProductEditModel => ({
    name: model.name,
    categoryId: model.category?.id ?? 0,
});
