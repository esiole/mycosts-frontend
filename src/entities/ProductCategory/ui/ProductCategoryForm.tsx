import { Form, Formik } from "formik";
import * as Yup from "yup";
import { FormikInput } from "../../../shared/ui/inputs/FormikInput";
import { SubmitButton } from "../../../shared/ui/buttons/SubmitButton";
import { ProductCategoryFormFields } from "../model/types/productCategoryFormFields";

const initialValues: ProductCategoryFormFields = { name: "" };

const validationSchema = Yup.object<ProductCategoryFormFields>({
    name: Yup.string().required("Обязательное поле"),
});

type ProductCategoryFormProps = {
    submitButtonCaption: string;
    category?: ProductCategoryFormFields;
    onSubmit: (category: ProductCategoryFormFields) => Promise<void>;
};

export const ProductCategoryForm = ({
    submitButtonCaption,
    category,
    onSubmit,
}: ProductCategoryFormProps) => {
    const handleSubmit = async (values: ProductCategoryFormFields) => await onSubmit(values);

    return (
        <Formik
            initialValues={category ?? initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <FormikInput name={"name"} label={"Название"} />
                    <SubmitButton caption={submitButtonCaption} isLoading={isSubmitting} />
                </Form>
            )}
        </Formik>
    );
};
