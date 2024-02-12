import { useEffect, useState } from "react";
import { ApiResponse } from "../../types/apiResponse";

export const useApiRequest = <T>(
    fetch: () => Promise<ApiResponse<T>>,
): [T | null, boolean, string | null] => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            setIsLoading(true);

            const { data, error, isOk } = await fetch();
            if (isOk && data) {
                setData(data);
            } else if (error) {
                setError(error);
            }

            setIsLoading(false);
        })();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [data, isLoading, error];
};
