import styles from './styles/Filter.module.css';
import React, { useState } from 'react';
import { IContainerProps } from '../../interfaces/interfaces';
import MultiSelect from '../MultiSelect/MultiSelect';
export type Option = {
    value: string;
    label: string;
   
};
const Filter = ({ goodList, handleChexboxChange, setFilterArr }: IContainerProps) => {
    const [optionSelected, setSelected] = useState<Option[] | null>();
    const handleChange = (selected: Option[]) => {
        setSelected(selected);
        if(setFilterArr){
            setFilterArr(selected.map((item) => item.value))
        }
       
    };
    if (handleChexboxChange === undefined) return null;
    return (
        <div className={styles.filter_container}>
            <div className={styles.filter}>
                <span>Ваши сертификаты</span>
                <div className={styles.checkbox_container}>
                    <MultiSelect
                        key="certificates"
                        onChange={handleChange}
                        value={optionSelected}
                        isSelectAll={true}
                        menuPlacement={"bottom"}
                        options={goodList.map((item) => ({ label: `${item.PRICE.slice(0, -3)} руб`, value: item.ID }))} />
                </div>
            </div>
            <div className={styles.developer_badge}>
                <div className={styles.badge_content}>
                    <h4>Разработчик</h4>
                    <p><strong>Имя:</strong> Константин Вьюнков</p>
                    <p><strong>Email:</strong><a href="mailto:konstantinvunkov@gmail">konstantinvunkov@gmail</a></p>
                    <p><strong>Tg:</strong> <a href="https://t.me/loach99" target="_blank">https://t.me/loach99</a></p>
                    <p><strong>GitHub:</strong> <a href="https://github.com/loach99" target="_blank">https://github.com/loach99</a></p>
                    <p><strong>Дата выполнения:</strong> 20 декабря 2024</p>
                </div>
            </div>
        </div>
    );
}

export default Filter;