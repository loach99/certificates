import { useEffect } from "react";
import { fetchGoodList } from "../api/getGoodList";
import { ICertificate } from "../interfaces/interfaces";
import { useError } from "./useError";

const useGetGoodList = () => {
    const {loading, setLoading, error, setError, data, setData} = useError<ICertificate[]>([]);
    useEffect(() => {
        try {
            setLoading(true);
            fetchGoodList()
                .then((result) => {
                    if (!result?.ok) {
                        setError(true);
                        setLoading(false);
                    } else {
                        result.json().then((data) => {
                            setData(data.data);
                            setLoading(false);
                        })
                    }
                })
        } catch (error) {
            console.log(error)
        }
    }, [])
    return {
        data,
        error,
        loading
    };
}

export default useGetGoodList;