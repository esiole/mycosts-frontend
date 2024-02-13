import { Dialog } from "../../../shared/ui/dialogs/Dialog";
import { ProductCategoryForm } from "../../../entities/ProductCategory/ui/ProductCategoryForm";
import { ProductCategoryFormFields } from "../../../entities/ProductCategory";
import { addProductCategory } from "../../../entities/ProductCategory/api/productCategoryApi";

type AddProductCategoryDialogProps = {
    isOpen: boolean;
    onClose: () => void;
};

export const AddProductCategoryDialog = ({ isOpen, onClose }: AddProductCategoryDialogProps) => {
    const handleSubmit = async (category: ProductCategoryFormFields) => {
        const response = await addProductCategory(category);
        onClose();
    };

    return (
        <Dialog isOpen={isOpen} title={"Добавление категории продуктов"} onClose={onClose}>
            <ProductCategoryForm submitButtonCaption={"Добавить"} onSubmit={handleSubmit} />
        </Dialog>
    );
};
