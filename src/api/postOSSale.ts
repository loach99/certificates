import { IOSSale } from "../interfaces/interfaces";
export const fetchOSSale = async ({id, tableName, primaryKey, price, sum, name, phone, email, message}: IOSSale) => {
    try {
        const response = await fetch("/service/api/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ApiKey: "011ba11bdcad4fa396660c2ec447ef14",
                MethodName: "OSSale",
                Id: id,
                TableName: tableName,
                PrimaryKey: primaryKey,
                Price: price,
                Summa: sum,
                ClientName: name,
                Phone: phone,
                Email: email,
                PaymentTypeId: 2,
                useDelivery: 0,
                IsGift: 0,
                MsgText: message,
                PName: '',
                PPhone: ''     
            }),
        });
        return response
    } catch (error) {
        console.error("Error fetching goods list:", error);
    }
};
