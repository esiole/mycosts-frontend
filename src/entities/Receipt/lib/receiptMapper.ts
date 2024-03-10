import { ReceiptFormFields } from "../model/types/receiptFormFields";
import { ReceiptEditModel } from "../model/types/receiptEditModel";
import { CostFormFields } from "../model/types/costFormFields";
import { ICost } from "../model/types/cost";

export const toReceiptEditModel = (model: ReceiptFormFields): ReceiptEditModel => ({
    date: model.date,
    placeName: model.placeName,
    costs: model.costs.map((c) => toCostEditModel(c)),
});

const toCostEditModel = (cost: CostFormFields): ICost => ({
    amount: cost.amount ?? 0,
    count: cost.isWeightMode ? 1 : cost.count ?? 1,
    weight: cost.weight ?? undefined,
    productId: cost.product?.id ?? 0,
});
