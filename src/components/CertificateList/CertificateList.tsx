import React from "react";
import { ICertificate, IContainerProps } from "../../interfaces/interfaces";
import Certificate from "../Certificate/Certificate";
import styles from './styles/CertificateList.module.css'
const CertificateList = ({ goodList }: IContainerProps) => {
    return (
        <div className={styles.list_container}>
            {goodList.map((item: ICertificate) => {
                return (
                    <Certificate key={item.ID}  item={item} />
                )
            })}
        </div>
    );
}

export default CertificateList;