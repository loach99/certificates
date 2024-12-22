export interface ICertificate {
    DESCRIPTION: string;
    DISCOUNT: string;
    ID: string;
    IMAGEURL: string;
    NAME: string;
    PRICE: string;
    PRIMARYKEY: string;
    REC_NAME: string;
    REC_PAYMENT_METHOD: string;
    REC_PAYMENT_OBJECT: string;
    REC_QUANTITY: string;
    REC_SNO: string;
    REC_SUM: string;
    REC_TAX: string;
    SUMMA: string;
    TABLENAME: string;
}
export interface IContainerProps {
    goodList: ICertificate[];
    handleChexboxChange?: (id: string) => void;
    setFilterArr?: (arr: string[]) => void;
}
type setIsActiveFunc = (isActive: boolean) => void
type isActive = boolean
export interface IModalProps {
    setIsActive?: setIsActiveFunc;
    isActive?: isActive;
    text?: string;
    children?: React.ReactNode
}
export interface ICertificateProps {
    item: ICertificate;
    setIsActive: setIsActiveFunc;
    isActive: isActive;
    setCertificateName: (certificateName: string) => void
}
export interface IFormInput {
    fullName: string;
    phone: string;
    email: string;
    message: string;
}
export interface IOSSale {
    id: string;
    tableName: string;
    primaryKey: string;
    price: string;
    sum: string;
    name: string;
    phone: string;
    email: string;
    message: string;
    pName?: string;
    pPhone?: string;
}
export type MyFormProps = Pick<ICertificate, 'ID' | 'TABLENAME' | 'PRIMARYKEY' | 'PRICE' | 'SUMMA'>
export interface IDeliverData{
    CERTNUMBER: string
}
