import { useState } from "react";
import { Button } from "../../../shared/ui/buttons/Button";
import { AddReceiptDialog } from "./AddReceiptDialog";

export const AddReceiptButton = () => {
    const [isOpenDialog, setIsOpenDialog] = useState(false);

    return (
        <>
            <Button caption={"Добавить"} onClick={() => setIsOpenDialog(true)} />
            <AddReceiptDialog isOpen={isOpenDialog} onClose={() => setIsOpenDialog(false)} />
        </>
    );
};
