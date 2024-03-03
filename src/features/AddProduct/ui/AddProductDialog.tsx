import { Dialog } from "../../../shared/ui/dialogs/Dialog";
import { addProduct, ProductForm } from "../../../entities/Product";
import { ProductEditModel } from "../../../entities/Product/model/types/productEditModel";

type AddProductDialogProps = {
    isOpen: boolean;
    onClose: () => void;
};

export const AddProductDialog = ({ isOpen, onClose }: AddProductDialogProps) => {
    const handleSubmit = async (product: ProductEditModel) => {
        const response = await addProduct(product);
        onClose();
    };

    return (
        <Dialog isOpen={isOpen} title={"Добавление продукта"} onClose={onClose}>
            <ProductForm submitButtonCaption={"Добавить"} onSubmit={handleSubmit} />
        </Dialog>
    );
};
