import { useState } from "react";

const usePhoneMask = () => {
    const [phone, setPhone] = useState('');
    const [phoneError, setError] = useState('');
    const handleChange = (event: any) => {
        const input = event.target.value.replace(/\D/g, '');
        let formattedPhone = '+7 ';
        if (input.length > 1) formattedPhone += '(' + input.slice(1, 4);
        if (input.length > 4) formattedPhone += ') ' + input.slice(4, 7);
        if (input.length > 7) formattedPhone += '-' + input.slice(7, 9);
        if (input.length > 9) formattedPhone += '-' + input.slice(9, 11);
        setPhone(formattedPhone);
        validatePhone(formattedPhone);
    };
    const validatePhone = (value:any) => {
        const phonePattern = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
        if (!value) {
          setError('*Это поле обязательно');
        } else if (!phonePattern.test(value)) {
          setError('Введите корректный номер телефона');
        } else {
          setError('');
        }
      };
      const handleBlur = () => {
        validatePhone(phone); // Проверка номера при потере фокуса
      };
    return {
       phone,
       phoneError,
       handleChange,
       handleBlur
    };
}
 
export default usePhoneMask;