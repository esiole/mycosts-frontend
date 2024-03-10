import { getAsync, postAsync } from "../../../shared/api/axios";
import { RECEIPTS_PATH } from "../../../shared/config/api";
import { IReceipt } from "../model/types/receipt";
import { ReceiptEditModel } from "../model/types/receiptEditModel";

export const addReceipt = async (receipt: ReceiptEditModel) =>
    await postAsync<ReceiptEditModel, IReceipt>(RECEIPTS_PATH, receipt);

export const getReceipts = async () => await getAsync<IReceipt[]>(RECEIPTS_PATH);
