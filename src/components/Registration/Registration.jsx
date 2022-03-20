import React, { useEffect, useState } from 'react';
import './assets/Registration.css';
import Close from './icons/close.svg';
import Check from './icons/check.svg';
import Google from './icons/googleIcon.svg';
import { signInWithGoogle } from '../../store/actions/authActions';
const Registration = ({ visible = false, onClose, user }) => {
	const [isCode, setCode] = useState(false);
	const [isChecked, setChecked] = useState(false);
	// создаем обработчик нажатия клавиши Esc
	const onKeydown = ({ key }) => {
		switch (key) {
			case 'Escape':
				onClose();
				setCode(false);
				break;
			default:
				break;
		}
	};

	// c помощью useEffect цепляем обработчик к нажатию клавиш
	// https://ru.reactjs.org/docs/hooks-effect.html
	useEffect(() => {
		document.addEventListener('keydown', onKeydown);
		return () => document.removeEventListener('keydown', onKeydown);
	});

	// если компонент невидим, то не отображаем его
	if (!visible || user) return null;

	// или возвращаем верстку модального окна
	return (
		<>
			{!isCode ? (
				<div
					className='registration'
					onClick={() => {
						onClose();
						setCode(false);
					}}
				>
					<div
						className='registration-dialog'
						onClick={(e) => e.stopPropagation()}
					>
						<div className='registration-header'>
							<span
								className='registration-close'
								onClick={() => {
									onClose();
									setCode(false);
								}}
							>
								<img src={Close} alt='close' />
							</span>
						</div>

						<div className='registration-body'>
							<div className='registration-content medium-font'>
								Войдите или зарегистрируйтесь, чтобы продолжить
							</div>
						</div>
						{/* {<div className="registration-footer"></div>} */}
						<div className='registration-input'>
							<p>Телефон</p>
							<input type='number' placeholder='+996 700 77 77 77' />
						</div>
						<div className='registration-btns'>
							<button
								onClick={() => {
									setCode(true);
								}}
							>
								Получить код
							</button>
							<div className='registration-btns-or'>
								<hr />
								<p>или</p>
								<hr />
							</div>
							<button onClick={() => signInWithGoogle()}>
								<img src={Google} alt='' /> <span>Войти через Google</span>
							</button>
						</div>
					</div>
				</div>
			) : (
				<div
					className='code'
					onClick={() => {
						onClose();
						setCode(false);
					}}
				>
					<div className='code-dialog' onClick={(e) => e.stopPropagation()}>
						<div className='code-header'>
							<span
								className='code-close'
								onClick={() => {
									onClose();
									setCode(false);
								}}
							>
								<img src={Close} alt='close' />
							</span>
						</div>

						<div className='code-body'>
							<div className='code-content medium-font'>Введите код </div>
						</div>
						{/* {<div className="code-footer"></div>} */}
						<div className='code-input'>
							<p className='code-input-text light-font'>
								Мы отправили код подтверждения на номер +996 500432323{' '}
								<span className='light-font' onClick={() => setCode(false)}>
									Изменить
								</span>
							</p>
							<input type='number' placeholder='XXX XXX' />
						</div>
						<div className='code-result'>
							<p>Код совпадает</p>
						</div>
						<div className='code-check'>
							<div
								onClick={() => setChecked(!isChecked)}
								className={
									isChecked
										? 'code-check-checkbox checked'
										: 'code-check-checkbox'
								}
							>
								{isChecked ? <img src={Check} alt='' /> : <></>}
							</div>
							<p className='light-font'>
								Согласен с <span className='light-font'>условиями</span>{' '}
								использования сервиса Octopus и{' '}
								<span className='light-font'>обработки</span> персональных
								данных
							</p>
						</div>
						<div className='code-btns'>
							<button>Подтвердить</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Registration;
