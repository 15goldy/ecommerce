import React from "react";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { addItem,delItem } from "../redux/actions/index";
import { useDispatch } from "react-redux";


const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

	const dispatch=useDispatch()
	
const[cartBtn,setCartBtn]=useState("Add to Cart")

const handleCart=(product)=>{

	if (cartBtn==="Add to Cart"){
		dispatch(addItem(product))
		setCartBtn("Remove from Cart")
	}
	else{
		dispatch(delItem(product))
		setCartBtn("Add to Cart")}
}


  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/ ${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  },[] );

  const Loading = () => {
    return <>
    <div className="col md-6 " style={{lineHeight:2}}>
			<Skeleton height={400}/>
		</div>
		<div className="col md-6" style={{lineHeight:"2"}} >
			<Skeleton height={50} width={300}/>
			<Skeleton height={75}/>
			<Skeleton height={75} width={150}/>
			<Skeleton height={50}/>
			<Skeleton height={150}/>
			<Skeleton height={50} width={100} style={{marginLeft:"6"}}/>
		</div>
		</>;
  };

  const ShowProduct = () => {
    return(
    	<>
    		<div className="col-md-6">
    			<img  src={product.image} alt={product.title} style={{height:"440px", width:"440px"}} />
    		</div>
    		<div className="col-md-6">
    			<h4 className='text-uppercase text-black-50'>{product.category}</h4>
    			<h1 className='display-5'>{product.title}</h1>
    		<p className=" lead fw-bolder"> rating{product.rating && product.rating.rate}
    		<i className='fa fa-star'> </i>
    		</p>

				<h3 className="display-6 fw-bold my-4">${product.price}</h3>
				<p className="lead">{product.description}</p>
				<button className="btn btn-outline-dark px-4 py-2" onClick={()=>handleCart(product)} >{cartBtn}</button>
				{/* onClick={()=>addProduct(product)} */}

  
			  <Link to='/cart'  className="btn btn-outline-dark  ms-2 px-2 py-2 " >Go to Cart</Link>	
    		</div>
    	</>
    )
  };
  return (
    <div>
      <div className="container py-4">
        <div className="row py-4">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
};

export default Product;