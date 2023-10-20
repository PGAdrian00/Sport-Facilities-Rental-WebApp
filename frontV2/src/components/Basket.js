import React from 'react';
import '../styles/Basket.css';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart, removeProductFromCart } from '../actions/cart';

export default function Basket(props) {

	const cartItems = useSelector((state) => state.productAdded);
	const dispatch = useDispatch();

	const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
	const transport = 12;
	const total = itemsPrice; /*+ transport;*/
	return (
		<div className='basket'>
			<span onClick={() => props.setShowBasket(false)}>X</span>
			<h2>Terenuri in cos</h2>
			{cartItems.length === 0 && <p>Cosul este gol</p>}
			{cartItems.map((item) => (
				<>
					<div key={item.id} className='item-add'>
						<div className='name'>{item.name}</div>
						<div className='btns'>
							<button onClick={() =>dispatch(addProductToCart(item))} className='add'>
								+
							</button>
							<button onClick={() =>dispatch(removeProductFromCart(item))} className='add'>
								-
							</button>
						</div>
						<div className='qty'>
							{item.qty} x {item.price} Ron
						</div>
					</div>
				</>
			))}
			{cartItems.length !== 0 && (
				<>
					<hr></hr>
					{/* <div style={{marginBottom:'20px',marginTop:'20px',float:'right'}}>Taxe aditionale : {transport} Ron</div> */}
					<div style={{marginBottom:'20px',marginTop:'100px',textAlign:'center'}}>
						<b >Total: {total.toFixed(2)} Ron</b>
					</div>
					<button className='finalizeaza'>Finalizare comanda!</button>
				</>
			)}
		</div>
	);
}
