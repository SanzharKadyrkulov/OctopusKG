import React from 'react';
import './assets/OrderCard.css';
import Pending from './icons/pending.svg';
import Error from './icons/error.svg';
import Success from './icons/success.svg';
const OrderCard = ({ status }) => {
	return (
		<div className='order-card'>
			<div className='order-card-text'>
				<p className='medium-font order-card-text-head'>Заказ № 1</p>
				<p className='medium-font order-card-text-body'>
					{status === 'pending'
						? 'Скоро доставим '
						: status === 'error'
						? 'Не смогли доставить'
						: 'Доставили'}
				</p>
				<p className='medium-font order-card-text-body'>
					{status === 'pending' ? '' : '12.11.2021'}
				</p>
			</div>
			<div
				className={
					status === 'pending'
						? 'order-card-img pending'
						: status === 'error'
						? 'order-card-img error'
						: 'order-card-img success'
				}
			>
				<img
					src={
						status === 'pending'
							? Pending
							: status === 'error'
							? Error
							: Success
					}
					alt='status'
				/>
			</div>
			<div className='order-card-info'>
				<div className='order-card-info-text'>
					<p className='medium-font'>Товары</p>
					<p className='medium-font'>Кроссовки Найк, Красный цвет, 37 размер</p>
				</div>
				<div className='order-card-info-text'>
					<p className='medium-font'>Предположительное время доставки</p>
					<p className='medium-font'>30-60 мин.</p>
				</div>
				<div className='order-card-info-text'>
					<p className='medium-font'>Сумма к оплате</p>
					<p className='medium-font'>6 000 сом</p>
				</div>
				<div className='order-card-info-text'>
					<p className='medium-font'>Дата доставки</p>
					<p className='medium-font'>12.11.2021</p>
				</div>
			</div>
		</div>
	);
};

export default OrderCard;
