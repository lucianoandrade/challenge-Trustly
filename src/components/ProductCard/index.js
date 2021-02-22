import React, { useEffect, useState } from 'react';
import ListofProducts from "../../config/constants";
import {
  ProductsListWrapper,
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
    <ProductsListWrapper>
      {products &&
        products.map((product) => {
          return (
            <ProductCard key={product.id}>
              <img
                src={product.thumbnailURL}
                alt={`Thumbnail ${product.description}`}
              />

              <ProductDescription>{product.description}</ProductDescription>
              <ProductPrice>$ {product.price}</ProductPrice>
            </ProductCard>
          );
        })}
    </ProductsListWrapper>
  );
}
export default ProductsList;