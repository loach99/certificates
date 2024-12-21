import Checkbox from '../Checkbox/Checkbox';
import styles from './styles/Filter.module.css';
import React from 'react';
import { IContainerProps } from '../../interfaces/interfaces';
const Filter = ({ goodList, handleChexboxChange }: IContainerProps) => {
    if (handleChexboxChange === undefined) return null
    return (
        <div className={styles.filter_container}>
            <div className={styles.filter}>
                <span>Ваши сертификаты</span>
                <div className={styles.checkbox_container}>
                    {goodList.map((item) => {
                        return (
                            <Checkbox key={item.ID} id={item.ID} handleChexboxChange={handleChexboxChange} name={item.NAME} />
                        )
                    }
                    )}
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