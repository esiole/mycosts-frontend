import { useApiRequest } from "../shared/lib/hooks/useApiRequest";
import { getReceipts, ReceiptList } from "../entities/Receipt";
import { AddReceiptButton } from "../features/AddReceipt";

const ReceiptsPage = () => {
    const [receipts] = useApiRequest(getReceipts);

    return (
        <div>
            <div>Receipts page</div>
            <div>
                <AddReceiptButton />
            </div>
            <ReceiptList receipts={receipts || []} />
        </div>
    );
};

export default ReceiptsPage;
