import { IReceipt } from "../model/types/receipt";
import { ReceiptListItem } from "./ReceiptListItem";

type ReceiptListProps = {
    receipts: IReceipt[];
};

export const ReceiptList = ({ receipts }: ReceiptListProps) => {
    return (
        <>
            {receipts.map((r) => (
                <ReceiptListItem key={r.id} receipt={r} />
            ))}
        </>
    );
};
