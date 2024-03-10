import { CostFormFields } from "./costFormFields";

export type ReceiptFormFields = {
    date: string;
    placeName: string;
    costs: CostFormFields[];
};
