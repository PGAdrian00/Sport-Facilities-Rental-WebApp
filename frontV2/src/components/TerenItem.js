import React from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../actions/cart';
import '../styles/TerenItem.css';

export default function TerenItem(props) {
	const { item } = props;
	const dispatch = useDispatch(); //asa se apeleaza functiile din Redux

	return (
		<div className='product-item'>
			<div style={{ backgroundImage: `url(${item.image})` }}></div>
			<h1>{item.name}</h1>
			<p>{item.description}</p>
			<div class = "button-container">
				<button class="my-button" onClick={() => dispatch(addProductToCart(item))}>{item.price} Ron</button>
				<button class = "my-button2">Edit</button>
				<button class = "my-button3">Delete</button>
			</div>
		</div>
	);
}
