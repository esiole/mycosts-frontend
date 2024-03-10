import { IconButton } from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";
import { FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import { ReceiptFormFields } from "../model/types/receiptFormFields";
import { ReceiptEditModel } from "../model/types/receiptEditModel";
import { SubmitButton } from "../../../shared/ui/buttons/SubmitButton";
import { FormikInput } from "../../../shared/ui/inputs/FormikInput";
import { Button } from "../../../shared/ui/buttons/Button";
import { FormikNumberInput } from "../../../shared/ui/inputs/FormikNumberInput";
import { FormikSwitch } from "../../../shared/ui/switches/FormikSwitch";
import { getProducts } from "../../Product";
import { FormikAsyncTypeahead } from "../../../shared/ui/typeaheads/FormikTypeahead";
import { CostFormFields } from "../model/types/costFormFields";
import { toReceiptEditModel } from "../lib/receiptMapper";
import { formatCurrency } from "../../../shared/lib/helpers/formatCurrency";

const sumCosts = (costs: CostFormFields[]): number | null =>
    costs.reduce(
        (partialSum, cost) => {
            const newSum = cost.sumAmount() ?? 0;
            return newSum ? (partialSum ?? 0) + newSum : partialSum;
        },
        null as number | null,
    );

const initialValues: ReceiptFormFields = {
    date: new Date().toISOString().substring(0, 10),
    placeName: "",
    costs: [new CostFormFields()],
};

const validationSchema = Yup.object<ReceiptFormFields>({
    placeName: Yup.string().required("Обязательное поле"),
    costs: Yup.array().of(
        Yup.object().shape({
            amount: Yup.number().nullable().required("Обязательное поле"),
            count: Yup.number()
                .nullable()
                .when("isWeightMode", {
                    is: false,
                    then: (schema) => schema.required("Обязательное поле"),
                }),
            weight: Yup.number()
                .nullable()
                .when("isWeightMode", {
                    is: true,
                    then: (schema) => schema.required("Обязательное поле"),
                }),
            product: Yup.object().required("Обязательное поле"),
        }),
    ),
});

type ReceiptFormProps = {
    submitButtonCaption: string;
    receipt?: ReceiptFormFields;
    onSubmit: (receipt: ReceiptEditModel) => Promise<void>;
};

export const ReceiptForm = ({ receipt, submitButtonCaption, onSubmit }: ReceiptFormProps) => {
    const handleSubmit = async (values: ReceiptFormFields) =>
        await onSubmit(toReceiptEditModel(values));

    const searchProducts = async (query: string) => {
        const response = await getProducts({ name: query });
        return response.data?.map((c) => ({ id: c.id, name: c.name })) || [];
    };

    return (
        <Formik
            initialValues={receipt ?? initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting, values, errors }) => (
                <Form>
                    <FormikInput name={"date"} label={"Дата"} type={"date"} />
                    <FormikInput name={"placeName"} label={"Название магазина"} />
                    <FieldArray name={"costs"}>
                        {({ push, remove }) => (
                            <div>
                                {values.costs.map((cost, index) => (
                                    <div key={cost.id}>
                                        <span>{index + 1}.</span>
                                        <FormikSwitch
                                            name={`costs[${index}].isWeightMode`}
                                            label={"На развес"}
                                        />
                                        <FormikNumberInput
                                            name={`costs[${index}].amount`}
                                            label={cost.isWeightMode ? "Сумма" : "Сумма за единицу"}
                                            min={0.01}
                                            step={0.01}
                                            endAdornment={"₽"}
                                        />
                                        {cost.isWeightMode ? (
                                            <FormikNumberInput
                                                name={`costs[${index}].weight`}
                                                label={"Вес"}
                                                min={0.001}
                                                step={0.001}
                                                endAdornment={"кг"}
                                            />
                                        ) : (
                                            <FormikNumberInput
                                                name={`costs[${index}].count`}
                                                label={"Количество"}
                                                min={1}
                                            />
                                        )}
                                        <FormikAsyncTypeahead
                                            name={`costs[${index}].product`}
                                            label={"Товар"}
                                            getOptions={searchProducts}
                                        />
                                        Всего:{" "}
                                        {cost.sumAmount() && (
                                            <>{formatCurrency(cost.sumAmount()!)}</>
                                        )}
                                        {values.costs.length > 1 && (
                                            <IconButton onClick={() => remove(index)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        )}
                                        <hr />
                                    </div>
                                ))}
                                <div>
                                    Итого:{" "}
                                    {sumCosts(values.costs) && (
                                        <>{formatCurrency(sumCosts(values.costs)!)}</>
                                    )}
                                </div>
                                <Button
                                    caption={"Добавить позицию"}
                                    onClick={() => push(new CostFormFields())}
                                />
                            </div>
                        )}
                    </FieldArray>
                    <SubmitButton caption={submitButtonCaption} isLoading={isSubmitting} />
                </Form>
            )}
        </Formik>
    );
};
