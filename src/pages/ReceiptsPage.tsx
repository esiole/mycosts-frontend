import { useApiRequest } from "../shared/lib/hooks/useApiRequest";
import { getReceipts, ReceiptList } from "../entities/Receipt";

const ReceiptsPage = () => {
    const [receipts] = useApiRequest(getReceipts);

    return (
        <div>
            <div>Receipts page</div>
            <ReceiptList receipts={receipts || []} />
        </div>
    );
};

export default ReceiptsPage;
