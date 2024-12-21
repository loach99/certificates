import React from "react";
import styles from './styles/Certificate.module.css'
import { ICertificate } from "../../interfaces/interfaces";
import { useNavigate } from "react-router";
const Certificate = ({ item }: { item: ICertificate }) => {
    let navigate = useNavigate();
    const {
        DESCRIPTION,
        DISCOUNT,
        NAME,
        PRICE,
        PRIMARYKEY,
        TABLENAME,
        SUMMA,
        ID
    }: ICertificate = item;
    const price = parseFloat(PRICE);
    const discount = parseFloat(DISCOUNT);
    const discountedPrice = price - (price * (discount / 100));
    const handleClick = () => {
        navigate('/form', {
            state: {
                sertificateName: NAME,
                id: ID,
                tableName: TABLENAME,
                primaryKey: PRIMARYKEY,
                price: PRICE,
                sum: SUMMA
            }
        });
    };
    return (
        <div className={styles.certificate}>
            <h2>{NAME}</h2>
            {DESCRIPTION && <p>{DESCRIPTION}</p>}
            <div className={styles.price}>
                <span className={styles.original_price}>
                    {price.toFixed(2)} руб.
                </span>
                <span className={styles.discounted_price}>
                    {discountedPrice.toFixed(2)} руб.
                </span>
            </div>
            <p className={styles.discount_info}>Скидка: {DISCOUNT}%</p>
            <button onClick={() => handleClick()} className={styles.buy_button}>Оформить сертификат</button>
        </div>
    );
}

export default Certificate;