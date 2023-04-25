import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addItem, delItem } from '../redux/action'
import { Link } from 'react-router-dom'
import "../redux/reducers/addItem"

const Cart = () => {
	const state=useSelector((state)=>state.addItem)
	const dispatch=useDispatch()

   const handleClose=(item)=>{
     dispatch(delItem (item))
	 }

	 const handlePlus=(cartItem)=>{
		dispatch(addItem(cartItem))
	 }

	 const handleMinus=(cartItem)=>{
		dispatch(delItem(cartItem))
	 }




	const cartItems=(cartItem)=>{

		return (
			<div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
				<div className="container py-4">
					<button onClick={()=>handleClose(cartItem)} className='btn-close float-end' aria-label='close'> </button>
				<div className="row justify-content-center">
				<div className="col-md-4">
					<img src={cartItem.image} alt={cartItem.title} height="200px" width="180px"/>
				</div>
					<div className="col-md-4 ">
						<h3> {cartItem.title}</h3>
						<p className='lead fw-bold'>
							{cartItem.qty} X ${cartItem.price} = $
					    	{cartItem.qty * cartItem.price}
							</p>
							<button className='btn btn-outline-dark me-4' onClick={()=>handlePlus(cartItem)}><i className='fa fa-plus'></i></button>
							<button className='btn btn-outline-dark me-4' onClick={()=>handleMinus(cartItem)}><i className='fa fa-minus'></i></button>
						
					</div>
				</div>
				</div>
			</div>
		)
	}


const emptycart=()=>{
	return (
		<div className="px-4 my-5 cyan rounded-3">
      <div className="container py-4">
				<div className="row">
					<h3>your cart is empty</h3>
				</div>

			</div>
		</div>
	)
}
const button=()=>{
	return(
		<div className="container">
			<div className="row">
<Link  className='btn btn-outline-primary mb-5 w-25 mx-auto' to="/checkout"> Proceed To Checkout</Link>
			</div>
		</div>
	)
}
	return (
		<div>
		{state.length === 0 && emptycart()}
{state.length !== 0 && state.map(cartItems)}
{state.length !== 0 && button()}
		</div>
	)
}

export default Cart;