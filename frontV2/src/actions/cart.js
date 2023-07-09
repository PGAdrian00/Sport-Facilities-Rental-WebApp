import { actionTypes } from './actionTypes';

export const addProductToCart = (productAdded) => {
	if (productAdded.qty === undefined) productAdded.qty = 1;
	return {
		type: actionTypes.ADD_PRODUCT_TO_CART,
		productAdded, //action
	};
};

export const removeProductFromCart = (productAdded) => {
	return {
		type: actionTypes.REMOVE_PRODUCT_FROM_CART,
		productAdded,
	};
};

//numire actiuni
