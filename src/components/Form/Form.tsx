import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './styles/Form.module.css'
import usePhoneMask from '../../hooks/usePhoneMask';
import { IDeliverData, IFormInput, MyFormProps } from '../../interfaces/interfaces';
import { fetchOSSale } from '../../api/postOSSale';
import { useError } from '../../hooks/useError';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import { Link } from 'react-router';

const MyForm = ({ ID, TABLENAME, PRIMARYKEY, PRICE, SUMMA }: MyFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger,
        reset
    } = useForm<IFormInput>();
    const { phone, phoneError, handleChange, handleBlur } = usePhoneMask();
    const { loading, setLoading, error, setError, data, setData } = useError<IDeliverData[]>([]);
    const onSubmit = (data: IFormInput) => {
        try {
            setLoading(true);
            fetchOSSale({
                phone: phone.replace(/[^0-9]/g, ''),
                id: ID,
                tableName: TABLENAME,
                primaryKey: PRIMARYKEY,
                price: PRICE,
                sum: SUMMA,
                name: data.fullName,
                email: data.email,
                message: data.message,
            })
                .then((result) => {
                    if (!result?.ok) {
                        setError(true);
                        setLoading(false);
                    } else {
                        result.json().then((data) => {
                            setData(data.data);
                            setLoading(false);
                            reset();
                        })
                    }
                });

        } catch (error) {

        }
    };

    return (
        <div>
            {data.length !== 0 && <Modal text='Спасибо за покупку!'>
                <div className={styles.success}>
                    <div>Ваш заказ успешно создан!</div>
                    <div><Link to={'/'}>Перейти на главную</Link></div>
                </div>
            </Modal>}
            {loading && <Loader />}
            {error ? <Modal text='Мы пытаемся все починить!'>
                <span>Произошла ошибка при получении данных</span></Modal> :
                <form className={styles.form_container} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.input_container}>
                        <label htmlFor="fullName">ФИО</label>
                        <input
                            id="fullName"
                            type="text"
                            {...register('fullName', { required: '*Это поле обязательно' })}
                            className={errors.fullName ? 'error' : ''}
                            onBlur={() => trigger('fullName')}
                        />
                        {errors.fullName && <span>{errors.fullName.message}</span>}
                    </div>
                    <div className={styles.input_container}>
                        <label htmlFor="phone">Телефон</label>
                        <input
                            type="text"
                            value={phone}
                            onChange={handleChange}
                            placeholder="+7 (___) ___-__-__"
                            onBlur={handleBlur}
                            required
                        />
                        {phoneError && <span>{phoneError}</span>}
                    </div>
                    <div className={styles.input_container}>
                        <label htmlFor="email">Email</label>
                        <input
                            id="email"
                            type="email"
                            {...register('email', {
                                required: '*Это поле обязательно',
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: 'Введите корректный email',
                                },
                            })}
                            className={errors.email ? 'error' : ''}
                            onBlur={() => trigger('email')}
                        />
                        {errors.email && <span>{errors.email.message}</span>}
                    </div>
                    <div className={styles.input_container}>
                        <label htmlFor="message">Сообщение</label>
                        <textarea
                            maxLength={1000}
                            id="message"
                            className={errors.message ? 'error' : ''}>
                        </textarea>
                        {errors.message && <span>{errors.message.message}</span>}
                    </div>
                    <button className={styles.buy_button} type="submit">Перейти к оплате</button>
                </form>}
        </div>

    );
};

export default MyForm;
