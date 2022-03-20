import React, { useState } from 'react';
import ProductCardInCart from '../../components/ProductCardInCart/ProductCardInCart';
import ProductCardInCartCheck from '../../components/ProductCardInCartCheck/ProductCardInCartCheck';
import './assets/Cart.css';
import Empty from './icons/empty.png';
import { useNavigate } from 'react-router-dom';

let arr = [1, 2, 3];
// let arr = null;

const Cart = () => {
	const [adress] = useState('Чуйская Область, г. Бишкек, ул. Масалиева 26');
	const navigate = useNavigate();
	return (
		<div className='container cart'>
			<p className='cart-name medium-font'>Корзина</p>
			{arr ? (
				<div className='d-flex' style={{ justifyContent: 'space-between' }}>
					<div className='cart-left'>
						<div className='cart-left-items'>
							{arr.map((item) => (
								<ProductCardInCart id={item} />
							))}
						</div>
						<div className='cart-left-adress'>
							<p className='medium-font'>Ваш адрес доставки</p>
							<p>Вы можете изменить адрес доставки</p>
							<div className='cart-left-adress-con'>
								<input type='text' value={adress} />
								<button>Заказать</button>
							</div>
						</div>
					</div>

					<div className='cart-right'>
						<p className='cart-right-head medium-font'>Товары: 3 шт</p>
						<div className='cart-right-items'>
							{arr.map((item) => (
								<ProductCardInCartCheck id={item} />
							))}
						</div>

						<div className='cart-right-adress'>
							<div className='cart-right-adress-text'>
								<p className='medium-font'>Адрес доставки</p>
								<p>{adress}</p>
							</div>
							<button>Изменить</button>
						</div>
						<div className='cart-right-delivery'>
							<p className='medium-font'>Доставка</p>
							<p>300 с</p>
						</div>
						<div className='cart-right-totalprice'>
							<p className='medium-font'>Итого: 86 918 сом </p>
						</div>
						<button className='cart-right-btn-buy'>Подтвердить заказ</button>
					</div>
				</div>
			) : (
				<div className='cart-empty'>
					<p>
						Ваша корзина пуста, добавьте товары чтобы оформить заказ
						<span onClick={() => navigate('/')}>На главную</span>
					</p>
					<div className='cart-empty-img'>
						<img src={Empty} alt='empty' />
					</div>
				</div>
			)}
		</div>
	);
};

export default Cart;
