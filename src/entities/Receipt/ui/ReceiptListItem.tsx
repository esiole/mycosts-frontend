import { IReceipt } from "../model/types/receipt";

type ReceiptListItemProps = {
    receipt: IReceipt;
};

export const ReceiptListItem = ({ receipt }: ReceiptListItemProps) => {
    return (
        <div>
            <>
                {receipt.id}. {receipt.date}: {receipt.placeName}
            </>
        </div>
    );
};
