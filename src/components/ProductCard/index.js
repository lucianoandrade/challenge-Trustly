import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ListofProducts from "../../config/constants";
import Button from "../Buttons/MainButton";
import Select from "../Select";
import {
  ProductsListContainer,
  ProductCard,
  ProductDescription,
  ProductPrice,
  SelectContainer,
  SelectName
} from './styles';

function ProductsList(props) {
  
  const {valueFilter} = props;
  const [size, setSize] = useState('36');
  const [quantity, setQuantity] = useState('0');
  const [products, setProducts] = useState([]);
  const sizes = [36, 37, 38, 39, 40, 41, 42, 43];
  const history = useHistory();
  
  useEffect(() => {
      ListofProducts.get().then(response => setProducts(response.data.results));
  },[]);
  
  const filtered =
  products.filter((item) =>
    item.description.toLowerCase().includes(valueFilter.toLowerCase()),
  );

  const handleChosenProduct = (
    productId,
    productPrice,
    productDescription,
    productThumbUrl,
    productmMaxresURL,
    productColor,
  ) => {
    if (!quantity || quantity === '0') {
      alert('Please choose a quantity');
    } else {
      history.push('/checkout',{
        id: productId,
        description: productDescription,
        size: size,
        quantity: quantity,
        price: productPrice,
        color: productColor,
        thumbnailURL: productThumbUrl,
        MaxresURL: productmMaxresURL,
      });
    }
  };

  return (
    <ProductsListContainer>
      {filtered &&
        filtered.map((product) => {
          return (
            <ProductCard key={product.id}>
              <img
                src={product.thumbnailURL}
                alt={`Thumbnail ${product.description}`}
              />
              <ProductDescription>{product.description}</ProductDescription>
              <SelectContainer>
                <SelectName>Size</SelectName>
                <Select 
                  name="sizes" 
                  id="sizes" 
                  onChange={(e) => setSize(e.target.value)}
                >
                  {sizes.map((size) => {
                    return (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    );
                  })}
                </Select>
                <SelectName>Quantity</SelectName>
                <Select 
                  name="quantity" 
                  id="quantity" 
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                </Select>
              </SelectContainer>
              <ProductPrice>{`$ ${product.price}`}</ProductPrice>
              <Button
                onClick={() =>
                  handleChosenProduct(
                    product.id,
                    product.price,
                    product.description,
                    product.thumbnailURL,
                    product.maxresURL,
                    product.color,
                  )
                }
              >
                Add to cart
              </Button>
            </ProductCard>
          );
      })}
    </ProductsListContainer>
  );
}
export default ProductsList;