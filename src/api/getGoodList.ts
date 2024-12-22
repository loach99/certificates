export const fetchGoodList = async () => {
    try {
        const response = await fetch("/service/api/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ApiKey: "011ba11bdcad4fa396660c2ec447ef14",
                MethodName: "OSGetGoodList"
            }),
        });
        return response
    } catch (error) {
        console.error("Error fetching goods list:", error);
    }
};
