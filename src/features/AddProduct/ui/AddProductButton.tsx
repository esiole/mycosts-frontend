import { useState } from "react";
import { Button } from "../../../shared/ui/buttons/Button";
import { AddProductDialog } from "./AddProductDialog";

export const AddProductButton = () => {
    const [isOpenDialog, setIsOpenDialog] = useState(false);

    return (
        <>
            <Button caption={"Добавить"} onClick={() => setIsOpenDialog(true)} />
            <AddProductDialog isOpen={isOpenDialog} onClose={() => setIsOpenDialog(false)} />
        </>
    );
};
