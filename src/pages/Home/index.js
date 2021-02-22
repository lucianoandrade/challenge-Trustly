import React, { useEffect, useState } from "react";
import ListofProducts from "../../config/constants";
import PageContainer from "../../components/PageContainer";
import Filter from "../../components/Filter";
import { Container } from "./styles";

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
      ListofProducts.get().then(response => setProducts(response.data.results));
  },[]);
  return (
    <PageContainer>
      <Container>
        <Filter />
        <div>{products.map((item, index) => (
          <p key={index}>
            {`${item.description} - ${item.color} - ${item.price}`}
          </p>
        ))}
        </div>
      </Container>
    </PageContainer>
  );
};

export default Home;