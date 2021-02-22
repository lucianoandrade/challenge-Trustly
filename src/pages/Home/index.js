import React, { useEffect, useState } from "react";
import ListofProducts from "../../config/constants";
import PageContainer from "../../components/PageContainer";

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
      ListofProducts.get().then(response => setProducts(response.data.results));
  },[]);
  return (
    <PageContainer>
      <div>{products.map((item, index) => (
        <p key={index}>
          {`${item.description} - ${item.color} - ${item.price}`}
        </p>
      ))}
      </div>
    </PageContainer>
  );
};

export default Home;