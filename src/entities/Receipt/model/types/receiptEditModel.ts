import { ICost } from "./cost";

export type ReceiptEditModel = {
    date: string;
    placeName: string;
    costs: ICost[];
};
