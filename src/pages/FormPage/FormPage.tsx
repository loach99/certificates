import React from "react";
import MyForm from "../../components/Form/Form";
import styles from './styles/FormPage.module.css'
import { Link, useLocation } from "react-router";
const FormPage = () => {
    
    const location = useLocation();
    const { sertificateName, id, tableName, primaryKey, price, sum } = location.state;
    return (
        <div className={styles.form_container}>
            <div className={styles.form}>
                <div>{sertificateName}</div>
                <MyForm ID={id} TABLENAME={tableName} PRIMARYKEY={primaryKey} PRICE={price} SUMMA={sum}/>
                <div>
                    <Link to={'/'}>Назад</Link>
                </div>
            </div>
        </div>
    );
}

export default FormPage;