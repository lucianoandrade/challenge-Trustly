import React, { useEffect, useState } from "react";
import ListofProducts from "../../config/constants";

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
      ListofProducts.get().then(response => setProducts(response.data.results));
  },[]);
  return (
    <div>{products.map((item, index) => (
      <p key={index}>
        {`${item.description} - ${item.color} - ${item.price}`}
      </p>
    ))}
    </div>
  );
};

export default Home;