/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import './assets/ProductDetails.css';
import Left from './icons/goback.svg';
import Stich from './icons/Stich.png';
import Heart from '../../components/ProductCardS/icons/favorite.svg';
import Ava from './icons/ava.png';
import Cart from '../../components/ProductCardS/icons/shopping-cart-add.svg';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { fetchOneProduct } from '../../store/actions/productActions';
import { useDispatch } from 'react-redux';

const ProductDetails = () => {
	const { product } = useSelector((store) => store.product);
	const navigate = useNavigate();
	const { id } = useParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchOneProduct(id));
	}, []);
	if (!product) {
		return <h1>loading...</h1>;
	}

	return (
		<div className='product-details container'>
			<div className='main-container'>
				<div className='left-side'>
					<div className='without-actions'>
						<div className='nav-box'>
							<img onClick={() => navigate(-1)} src={Left} alt='arrow' />
							<p className='medium-font'>{product.productName}</p>
						</div>
						<div className='main-content'>
							<div className='img-array'>
								<div className='img-array-item'>
									<img src={product.image} width={44} alt='' />
								</div>
								<div className='img-array-item'>
									<img src={Stich} width={44} alt='' />
								</div>
								<div className='img-array-item'>
									<img src={Stich} width={44} alt='' />
								</div>
								<div className='img-array-item'>
									<p>
										<span className='ultrabold-font'>+</span>2
									</p>
								</div>
							</div>
							<img
								src={product.image}
								width={480}
								className='product-img'
								alt='product'
							/>
						</div>
					</div>
					<div className='actions'>
						<div className='actions-item'>
							<img width={36} src={Heart} alt='heart' />
						</div>
						<div className='actions-item'>
							<img width={36} src={Cart} alt='cart' />
						</div>
					</div>
				</div>
				<div className='character'>
					<div className='parametr'>
						<p className='parametr-heading'>?????????? ?? ??????????????</p>
						<p className='parametr-price medium-font'>800 ??????</p>
						<div className='parametr-variant'>
							<p>?????????????????? ???????????????? ????????????????</p>
							<div className='parametr-variant-list'>
								<div className='parametr-variant-list-item light-font'>
									??????????????
								</div>
								<div className='parametr-variant-list-item light-font'>
									????????????
								</div>
								<div className='parametr-variant-list-item light-font'>
									??????????
								</div>
							</div>
						</div>
						<div className='parametr-size'>
							<p>?????????????????? ??????????????</p>
							<div className='parametr-size-list'>
								<div className='parametr-size-list-item light-font'>
									30 ?? 10 ????
								</div>
								<div className='parametr-size-list-item light-font'>
									40 ?? 10 ????
								</div>
								<div className='parametr-size-list-item light-font'>
									50 ?? 10 ????
								</div>
							</div>
						</div>
						<button>????????????</button>
					</div>
					<div className='seller'>
						<div className='seller-profile'>
							<div className='seller-profile-img'>
								<img width={80} src={Ava} alt='ava' />
							</div>
							<div className='seller-profile-info'>
								<p>????????????????</p>
								<p>Bishkek Toys</p>
								<p>?????????????? ???????????????? ??????????????</p>
							</div>
						</div>
						<button>?? ???????? ???????? ??????????????</button>
					</div>
				</div>
			</div>
			<div className='product-description'>
				<p className='medium-font'>???????????????????? ?? ????????????</p>
				<p>{product.description}</p>
			</div>
		</div>
	);
};

export default ProductDetails;
