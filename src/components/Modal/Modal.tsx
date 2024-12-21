import React from "react";
import { createPortal } from "react-dom";
import { IModalProps } from "../../interfaces/interfaces";
import styles from './styles/Modal.module.css';
import useClickOutside from "../../hooks/useClickOutside";
const modalElem = document.getElementById('modal');
const Modal = ({ setIsActive, isActive, text, children }: IModalProps) => {
    const ref = useClickOutside(() => {
        if(setIsActive) setIsActive(!isActive);
    });
    if (!modalElem) return null;
    return createPortal(
        (
            <div className={styles.modalWindow} >
                <div ref={ref} className={styles.modal}>
                    <div>
                        {text}
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        ), modalElem
    );
}

export default Modal;