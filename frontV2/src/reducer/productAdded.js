import { actionTypes } from '../actions/actionTypes';
import { toast } from 'react-toastify';

const initialState = [];

const notify = () =>
	toast.success('Produs adaugat', {
		position: toast.POSITION.BOTTOM_CENTER,
		autoClose: 1000,
	});


	//creare actiuni
	
export default (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_PRODUCT_TO_CART:
			notify();
			const productInCart = state.find((x) => x.id === action.productAdded.id);
			if (!productInCart) return [...state, action.productAdded];
			return state.map((p) => {
				if (p.id === action.productAdded.id)
					return { ...productInCart, qty: productInCart.qty + 1 };
				return p;
			});

		case actionTypes.REMOVE_PRODUCT_FROM_CART:
			const productInCartRemove = state.find(
				(x) => x.id === action.productAdded.id
			);
			if (productInCartRemove.qty === 1) {
				return state.filter((x) => x.id !== action.productAdded.id);
			} else {
				return state.map((x) =>
					x.id === action.productAdded.id
						? { ...productInCartRemove, qty: productInCartRemove.qty - 1 }
						: x
				);
			}
		default:
			return state;
	}
};
