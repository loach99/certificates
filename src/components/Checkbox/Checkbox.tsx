import React from 'react';
import styles from './styles/Checkbox.module.css'
interface CheckboxProps {
    id: string;
    handleChexboxChange: (stops: string) => void,
    name: string,
}
const Checkbox = ({ id, handleChexboxChange, name }: CheckboxProps) => {
    return (
        <label key={id} className={styles.custom_checkbox}>
            <input onChange={() => handleChexboxChange(id)} type="checkbox" />
            <span className={styles.checkbox}></span>
            <span>{name}</span>
        </label>
    );
}

export default Checkbox;