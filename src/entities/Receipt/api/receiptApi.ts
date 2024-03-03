import { getAsync } from "../../../shared/api/axios";
import { RECEIPTS_PATH } from "../../../shared/config/api";
import { IReceipt } from "../model/types/receipt";

export const getReceipts = async () => await getAsync<IReceipt[]>(RECEIPTS_PATH);
