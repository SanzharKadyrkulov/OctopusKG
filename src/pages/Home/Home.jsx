/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import './assets/Home.css';
import ProductCardS from '../../components/ProductCardS/ProductCardS';
import Footer from '../../components/Footer/Footer';
import Arrow from './icons/arrow-right.svg';
import Iphone from './icons/Apple_logo.svg';
import Right from './icons/Icon-right.svg';
import Left from './icons/Icon-left.svg';
import Umbrella from './icons/beach-access.svg';
import Menu from './icons/restaurant-menu.svg';
import Water from './icons/whatshot.svg';
import Sport from './icons/sports-handball.svg';
import AttentionCard from '../../components/AttenitonCard/AttentionCard';
import ProductCardR from '../../components/ProductCardR/ProductCardR';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/actions/productActions';
let arr1 = [1, 2, 3, 4, 5, 6];
const Home = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { products } = useSelector((store) => store.product);

	useEffect(() => {
		dispatch(fetchProducts());
	}, []);

	return (
		<>
			<div className='container hero'>
				<div className='carousel'>
					<div className='discount'>-15%</div>
					<div className='content-container'>
						<h2 className='bold-font'>
							Самые популярные <br /> игрушки
						</h2>
						<h2 className='bold-font black'>2021 года</h2>
						<button className='medium-font'>Посмотреть</button>
					</div>
				</div>
				<div className='hero-right'>
					<div className='hero-right-item'>
						<p className='medium-font h4'>Есть промокод?</p>
						<div>
							<input type='text' placeholder='Введите промокод' />
							<button>
								<img src={Arrow} alt='arrow' />
							</button>
						</div>
						<p className='blue-text'>Узнайте как получить купоны</p>
					</div>
					<div className='hero-right-item2'>
						<p className='p1'>Бесплатная доставка</p>
						<p className='p2'>Первый заказ, доставим бесплатно</p>
						<button>Начать покупку</button>
					</div>
				</div>
			</div>
			<div className='first-product container'>
				<div className='left-side'>
					<div className='content'>
						<div className='navbar'>
							<div className='heading-box'>
								<img src={Umbrella} alt='umbrella' />
								<p
									onClick={() => navigate('filter/Игрушки')}
									className='medium-font'
								>
									Игрушки
								</p>
								<button>
									<img src={Left} alt='left' />
								</button>
								<button>
									<img src={Right} alt='right' />
								</button>
							</div>
							<p onClick={() => navigate('filter/Игрушки')}>Посмотреть все</p>
						</div>
						<div className='product-list'>
							{products ? (
								products.map((item) => {
									return item.type === 'Игрушки' ? (
										<ProductCardS key={item.id} product={item} />
									) : (
										<></>
									);
								})
							) : (
								<h1>Loading...</h1>
							)}
						</div>
					</div>
					<div className='content'>
						<div className='navbar'>
							<div className='heading-box'>
								<img src={Menu} alt='menu' />
								<p
									onClick={() => navigate('filter/Еда и Напитки')}
									className='medium-font'
								>
									Еда и Напитки
								</p>
								<button>
									<img src={Left} alt='left' />
								</button>
								<button>
									<img src={Right} alt='right' />
								</button>
							</div>
							<p onClick={() => navigate('filter/Еда и Напитки')}>
								Посмотреть все
							</p>
						</div>
						<div className='product-list'>
							{products ? (
								products.map((item) => {
									return item.type === 'Еда и Напитки' ? (
										<ProductCardS key={item.id} product={item} />
									) : (
										<></>
									);
								})
							) : (
								<h1>Loading...</h1>
							)}
						</div>
					</div>
				</div>
				<div className='right-side'>
					<div>
						<p className='medium-font'>Скидки для Iphone</p>
						<img src={Iphone} alt='iphone' />
					</div>
				</div>
			</div>

			<div className='second-product container'>
				<div className='left-side'>
					<div className='heading-box'>
						<img src={Water} alt='water' />
						<p className='medium-font'>Успей купить</p>
					</div>
					<div className='product-list2'>
						{arr1.map((item) => (
							<AttentionCard key={item} />
						))}
					</div>
				</div>
				<div className='right-side'>
					<div className='heading-box'>
						<img src={Sport} alt='sport' />
						<p className='medium-font'>Спорт и Отдых</p>
					</div>
					<div className='product-list3'>
						{arr1.map((item) => (
							<ProductCardR key={item} />
						))}
					</div>
					<div className='more'>
						<hr />
						<button>Посмотреть еще</button>
						<hr />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
