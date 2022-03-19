import axios from 'axios';
import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	updateDoc,
} from 'firebase/firestore';
import { API_URL, defaultLimit, ProductActionTypes } from '../../consts';
import { db } from '../../firebase';

export const fetchProducts = () => async (dispatch) => {
	try {
		console.log('worked');
		// const filter = window.location.search;

		dispatch({ type: ProductActionTypes.FETCH_PRODUCTS });
		const arr = [];
		// const { data } = await axios.get(`${API_URL}/products/${filter}`);
		const data = await getDocs(collection(db, 'products'));
		data.forEach((item) => arr.push({ id: item.id, ...item.data() }));
		console.log(arr);
		dispatch({
			type: ProductActionTypes.FETCH_PRODUCTS_SUCCES,
			payload: arr,
		});
	} catch (e) {
		dispatch({
			type: ProductActionTypes.FETCH_PRODUCTS_ERROR,
			payload: e,
		});
	}
};

export const fetchOneProduct =
	(id, page = 1, limit = 6) =>
	async (dispatch) => {
		try {
			dispatch({ type: ProductActionTypes.FETCH_PRODUCTS });
			// const { data } = await axios.get(`${API_URL}/products/${id}`, {
			// 	params: { _page: page, _limit: limit },
			// });
			const data = await getDoc(doc(db, 'products', id));

			dispatch({
				type: ProductActionTypes.FETCH_ONE_PRODUCT,
				payload: { id: data.id, ...data.data() },
			});
		} catch (e) {
			dispatch({
				type: ProductActionTypes.FETCH_PRODUCTS_ERROR,
				payload: e,
			});
		}
	};

export const deleteProduct = (id) => async (dispatch) => {
	// await axios.delete(`${API_URL}/products/${id}`);
	await deleteDoc(doc(db, 'products', id));
	dispatch(fetchProducts());
};
export const addProduct = (product) => async (dispatch) => {
	// await axios.post(`${API_URL}/products`, product);
	await addDoc(collection(db, 'products'), product);
	dispatch(fetchProducts());
};

export const editProduct = (id, product) => async (dispatch) => {
	// await axios.patch(`${API_URL}/products/${id}`, product);
	await updateDoc(doc(db, 'products', id), product);
	dispatch(fetchProducts());
};
