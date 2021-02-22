import React, { useEffect, useState } from 'react';
import ListofProducts from "../../config/constants";
import Button from "../Button";
import {
  ProductsListContainer,
  ProductCard,
  ProductDescription,
  ProductPrice,
} from './styles';

function ProductsList(props) {
    
  const [products, setProducts] = useState([]);
    useEffect(() => {
        ListofProducts.get().then(response => setProducts(response.data.results));
    },[]);

    return (
    <ProductsListContainer>
      {products &&
        products.map((product) => {
          return (
            <ProductCard key={product.id}>
              <img
                src={product.thumbnailURL}
                alt={`Thumbnail ${product.description}`}
              />
              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>{`$ ${product.price}`}</ProductPrice>
              <Button>
                Add to cart
              </Button>
            </ProductCard>
          );
        })}
    </ProductsListContainer>
  );
}
export default ProductsList;