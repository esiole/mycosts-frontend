import { useState } from "react";
import { Button } from "../../../shared/ui/buttons/Button";
import { AddProductCategoryDialog } from "./AddProductCategoryDialog";

export const AddProductCategoryButton = () => {
    const [isOpenDialog, setIsOpenDialog] = useState(false);

    return (
        <>
            <Button caption={"Добавить"} onClick={() => setIsOpenDialog(true)} />
            <AddProductCategoryDialog
                isOpen={isOpenDialog}
                onClose={() => setIsOpenDialog(false)}
            />
        </>
    );
};
