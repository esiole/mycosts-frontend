import { Form, Formik } from "formik";
import * as Yup from "yup";
import { ProductFormFields } from "../model/types/productFormFields";
import { FormikInput } from "../../../shared/ui/inputs/FormikInput";
import { SubmitButton } from "../../../shared/ui/buttons/SubmitButton";
import { getProductCategories } from "../../ProductCategory";
import { FormikAsyncTypeahead } from "../../../shared/ui/typeaheads/FormikTypeahead";
import { toProductEditModel } from "../lib/productMapper";
import { ProductEditModel } from "../model/types/productEditModel";

const initialValues: ProductFormFields = { name: "", category: null };

const validationSchema = Yup.object<ProductFormFields>({
    name: Yup.string().required("Обязательное поле"),
    category: Yup.object().required("Обязательное поле"),
});

type ProductFormProps = {
    submitButtonCaption: string;
    product?: ProductFormFields;
    onSubmit: (product: ProductEditModel) => Promise<void>;
};

export const ProductForm = ({ product, submitButtonCaption, onSubmit }: ProductFormProps) => {
    const handleSubmit = async (values: ProductFormFields) =>
        await onSubmit(toProductEditModel(values));

    const searchCategories = async (query: string) => {
        const response = await getProductCategories({ name: query });
        return response.data?.map((c) => ({ id: c.id, name: c.name })) || [];
    };

    return (
        <Formik
            initialValues={product ?? initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <FormikInput name={"name"} label={"Название"} />
                    <FormikAsyncTypeahead
                        name={"category"}
                        label={"Категория продуктов"}
                        getOptions={searchCategories}
                    />
                    <SubmitButton caption={submitButtonCaption} isLoading={isSubmitting} />
                </Form>
            )}
        </Formik>
    );
};
