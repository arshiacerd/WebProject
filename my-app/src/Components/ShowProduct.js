import React, { useEffect, useState } from "react";

function ShowProduct() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    productList();
  }, []);
  const productList = async () => {
    let response = await fetch("http://localhost:4200/showProduct");
    let getData = await response.json();

    setProduct(getData);
  };
  

  return (
    <>
      {product.map((val, index) => {
        return <h3 key={index}>{val.dishName} {val.category}</h3>;
      })}
    </>
  );
}

export default ShowProduct;
