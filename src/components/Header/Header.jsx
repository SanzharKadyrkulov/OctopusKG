/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import './assets/header.css';
import Menu from './icons/menu.svg';
import Search from './icons/search.svg';
import Drop from './icons/caret-down.svg';
import Location from './icons/location.svg';
import Help from './icons/help-outline.svg';
import Login from './icons/log-in.svg';
import Inbox from './icons/inbox.svg';
import Heart from './icons/heart.svg';
import Cart from './icons/shopping-cart.svg';
import { useNavigate } from 'react-router-dom';
import Registration from '../Registration/Registration';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/actions/authActions';

const Header = () => {
	const { user } = useSelector((store) => store.auth);
	const navigate = useNavigate();
	const [isModal, setModal] = useState(false);
	const onClose = () => setModal(false);
	const dispatch = useDispatch();
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			dispatch({
				type: 'SET_USER',
				payload: user,
			});
		});
	}, []);

	return (
		<>
			<Registration user={user} visible={isModal} onClose={onClose} />

			<div className='container'>
				<div className='header-info'>
					<div className='header-info-block'>
						<img src={Location} alt='location' />
						<p className='header-info-text ml-2'>Bishkek</p>
					</div>
					{user && user.email === 'kadyrkulov.980@gmail.com' ? (
						<div className='header-info-block'>
							<p onClick={() => navigate('admin')} className='header-info-text'>
								Admin
							</p>
						</div>
					) : (
						<></>
					)}
					<div className='header-info-block'>
						<p className='header-info-text'>Стать продавцом в Octopus</p>
						<div className='header-info-block ml-25'>
							<img src={Help} alt='help' />
							<p className='header-info-text ml-2'>Помощь</p>
						</div>
					</div>
				</div>

				<div className='header'>
					<div onClick={() => navigate('/')} className='logo bold-font'>
						OCTOPUS
					</div>

					<div className='header-button'>
						<img src={Menu} alt='burger' />
						<p className='medium-font'>Каталог</p>
					</div>

					<div className='search'>
						<div className='search-categories'>
							<span>Везде</span>
							<img src={Drop} alt='drop' />
						</div>
						<input
							className='search-input'
							type='text'
							placeholder='Искать на Octopus'
						/>
						<div className='search-btn'>
							<img src={Search} alt='searh icon' />
						</div>
					</div>

					<div className='icons'>
						{user ? (
							<div
								onClick={() => {
									logout();
									setModal(false);
								}}
								className='icons-block'
							>
								<img src={Login} width='23px' alt='login' />
								<p className='undericon'>Выйти</p>
							</div>
						) : (
							<div
								onClick={() => {
									setModal(true);
								}}
								className='icons-block'
							>
								<img src={Login} width='23px' alt='login' />
								<p className='undericon'>Войти</p>
							</div>
						)}

						<div onClick={() => navigate('orders')} className='icons-block'>
							<img src={Inbox} width='23px' alt='inbox' />
							<p className='undericon'>Заказы</p>
						</div>
						<div onClick={() => navigate('favorites')} className='icons-block'>
							<img src={Heart} width='23px' alt='heart' />
							<p className='undericon'>Избранное</p>
						</div>
						<div onClick={() => navigate('cart')} className='icons-block'>
							<img src={Cart} width='23px' alt='cart' />
							<p className='undericon'>Корзина</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Header;
