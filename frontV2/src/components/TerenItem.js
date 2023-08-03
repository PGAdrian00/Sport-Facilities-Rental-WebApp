import React from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../actions/cart';
import '../styles/TerenItem.css';
import {Link} from 'react-router-dom';


export default function TerenItem(props) {
	const { item } = props;
	const dispatch = useDispatch(); //asa se apeleaza functiile din Redux

	return (
		<Link to={`/teren/${item.id}`}>
		<div className='product-item'>
			{/* <div style={{ backgroundImage: `url(${item.image})` }}></div> */}
			<div style={{ backgroundImage: `url(${item.image_source})` }}></div>
			<h1>{item.name}</h1>
			<p>{item.description}</p>
			<div className = "button-container">
				
			<button className="my-button" onClick={() => dispatch(addProductToCart(item))}>{item.price_per_hour} Ron</button>
			</div>
		</div>
		
		</Link>
	);
}
