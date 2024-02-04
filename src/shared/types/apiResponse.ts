export type ApiResponse<T> = {
    isOk: boolean;
    data?: T;
    error?: string;
};
