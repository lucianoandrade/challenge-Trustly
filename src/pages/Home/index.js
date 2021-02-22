import React, {useState} from "react";
import PageContainer from "../../components/PageContainer";
import Filter from "../../components/Filter";
import ProductsList from "../../components/ProductCard";

function Home(props) {
  const [valueFilter, setValueFilter] = useState('');
  return (
    <PageContainer>
      <Filter setValueFilter={setValueFilter}/>      
      <ProductsList valueFilter={valueFilter}/>
    </PageContainer>
  );
};

export default Home;