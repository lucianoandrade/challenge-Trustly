import React from "react";
import PageContainer from "../../components/PageContainer";
import Filter from "../../components/Filter";
import ProductsList from "../../components/ProductCard";
import { Container } from "./styles";

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