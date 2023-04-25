import React from "react";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentdidmounted = true;

  useEffect(() => {
    const getproduct = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentdidmounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        // console.log(filter);
      }
      return () => {
        componentdidmounted = false;
      };
    };
    getproduct();
  }, []);


  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        
      </>
    );
  };

const filterProduct=(category)=>{
   const updateList=data.filter((x)=>x.category===category);
   setFilter(updateList);
}

  const ShowProduct = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={()=>{setFilter(data)}}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>{filterProduct("men's clothing")}}>All Mens Wear</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>{filterProduct("women's clothing")}}>All Womens Wear</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>{filterProduct("jewelery")}}>Jewelery</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>{filterProduct("electronics")}}>electronic</button>
        </div>

        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div className="card h-100 text-center p-4  cardHover" key={product.id}>
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    style={{ height: "180px" }}
                  />

                  <div className="card-body">
                    <h5 className="card-title mb-0">
               {product.title.substring(0,12)}...
                    </h5>
                    <p className="card-text">$ {product.price}</p>
                    <Link to={`/products/${product.id}`} className="btn btn-outline-dark lead fw-bold">
                Buy Now
                    </Link>
                  </div>
                </div>
              </div>{" "}
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container  my-5 py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="display-6 fw-bolder text-center">Latest products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading/> : <ShowProduct/>}
        </div>
      </div>
    </div>
  );
};

export default Products;