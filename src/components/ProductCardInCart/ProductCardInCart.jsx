import React, { useState } from 'react';
import './assets/ProductCardInCart.css';
import Stich from '../ProductCardS/icons/stich.png';
import Minus from './icons/minus.svg';
import Plus from './icons/plus.svg';
import Delete from './icons/delete-alt.svg';
import Edit from './icons/edit-alt.svg';
const ProductCardInCart = ({ id }) => {
	const [quant, setQuant] = useState(1);
	const handleChangeCount = (n) => {
		if (n === '-' && quant === 1) {
			return;
		} else if (n === '-') {
			setQuant(quant - 1);
		} else {
			setQuant(quant + 1);
		}
	};

	return (
		<div
			// onClick={() => navigate("/" + id)}
			className='cart-c'
		>
			<div className='cart-c-img-con'>
				<img src={Stich} width={120} alt='' />
			</div>
			<div className='cart-c-text'>
				<p className='medium-font'>32 c</p>
				<p>0,5 мл | Газированный</p>
				<p className='light-font'>Газированный напиток “Coca-Cola” 0.5 л</p>
				<p>Кока Кола Кыргызстан</p>
			</div>
			<div className='cart-c-count'>
				<div
					className='cart-c-count-crement'
					onClick={() => handleChangeCount('-')}
				>
					<img src={Minus} alt='minus' />
				</div>
				<p className='cart-c-count-num medium-font'>{quant}</p>
				<div
					className='cart-c-count-crement'
					onClick={() => handleChangeCount('+')}
				>
					<img src={Plus} alt='plus' />
				</div>
			</div>
			<div className='cart-c-icons'>
				<div className='cart-c-icons-item'>
					<img src={Delete} alt='delete' />
				</div>
				<div className='cart-c-icons-item'>
					<img src={Edit} alt='edit' />
				</div>
			</div>
		</div>
	);
};

export default ProductCardInCart;
