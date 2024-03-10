import { Dialog } from "../../../shared/ui/dialogs/Dialog";
import { addReceipt, ReceiptEditModel, ReceiptForm } from "../../../entities/Receipt";

type AddReceiptDialogProps = {
    isOpen: boolean;
    onClose: () => void;
};

export const AddReceiptDialog = ({ isOpen, onClose }: AddReceiptDialogProps) => {
    const handleSubmit = async (receipt: ReceiptEditModel) => {
        const response = await addReceipt(receipt);
        onClose();
    };

    return (
        <Dialog isOpen={isOpen} title={"Добавление чека"} onClose={onClose}>
            <ReceiptForm submitButtonCaption={"Добавить"} onSubmit={handleSubmit} />
        </Dialog>
    );
};
