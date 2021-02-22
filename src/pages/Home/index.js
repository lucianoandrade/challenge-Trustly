import React, {useState} from "react";
import PageContainer from "../../components/PageContainer";
import Filter from "../../components/Filter";
import ProductsList from "../../components/ProductCard";
import { Container } from "./styles";

function Home(props) {
  const [valueFilter, setValueFilter] = useState('');
  return (
    <PageContainer>
      <Container>
        <Filter setValueFilter={setValueFilter}/>      
        <ProductsList valueFilter={valueFilter}/>
      </Container>
    </PageContainer>
  );
};

export default Home;