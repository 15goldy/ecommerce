import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'



      const CartBtn= () => {
	
	// we get a state of addItems
	//  we write the name of file not the function.
	const state=useSelector((state)=>state.addItem)
	return (
		<div>
	<Link to="/cart" className="btn btn-outline-dark  ms-2">
	<i className="fa fa-sign-in" aria-hidden="true"></i> Cart({state.length})</Link>
		</div>
	)
}

export default CartBtn