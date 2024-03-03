import { ICost } from "./cost";

export interface IReceipt {
    id: number;
    date: Date;
    placeName: string;
    costs: ICost[];
}
