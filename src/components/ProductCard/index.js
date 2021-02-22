import React, { useEffect, useState } from 'react';
import ListofProducts from "../../config/constants";
import Button from "../Button";
import Select from "../Select";
import {
  ProductsListContainer,
  ProductCard,
  ProductDescription,
  ProductPrice,
  SelectContainer
} from './styles';

function ProductsList(props) {
  const sizes = [36, 37, 38, 39, 40, 41, 42, 43];
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
              <SelectContainer>
                <p>Size</p>
                <Select name="sizes" id="sizes">
                  {sizes.map((size) => {
                    return (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    );
                  })}
                </Select>
                <p>Quantity</p>
                <Select name="quantity" id="quantity">
                  <option value="0">0</option>
                  <option value="1">1</option>
                </Select>
              </SelectContainer>
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