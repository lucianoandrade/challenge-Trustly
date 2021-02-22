import React from "react";
import PageContainer from "../../components/PageContainer";
import Filter from "../../components/Filter";
import { Container } from "./styles";
import ProductsList from "../../components/ProductCard";

function Home() {
  return (
    <PageContainer>
      <Container>
        <Filter />      
        <ProductsList/>
      </Container>
    </PageContainer>
  );
};

export default Home;