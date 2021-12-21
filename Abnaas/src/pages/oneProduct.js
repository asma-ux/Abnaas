import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
const Container = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  margin: 9px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 80%;
  height: 80vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  const { id } = useParams();
  const [qty, setqty] = useState(0);
  const [product, setproduct] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:8000/products/${id}`).then((res) => {
      console.log(res);
      setproduct(res.data.data);
    });
  }, []);

  function addCart(product) {
    const cart = localStorage.getItem('cart');
    product.quantity = qty;
    let item = [product];
    localStorage.setItem('cart', JSON.stringify(item));
  }

  return (
    <Container>
      <Navbar />

      <Wrapper>
        <ImgContainer>
          <Image src="../img.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>{product.name}</Title>
          <Desc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in
            finibus malesuada, lectus ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla
            fermentum vestibulum ex, eget tristique tortor pretium ut. Curabitur elit justo,
            consequat id condimentum ac, volutpat ornare.
          </Desc>
          <Price>$ {product.price}</Price>

          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => qty > 0 && setqty(qty - 1)} />
              <Amount>{qty}</Amount>
              <Add onClick={() => qty < product.qty && setqty(qty + 1)} />
            </AmountContainer>
            <Link to={`/Cart/${product._id}`}>
              {' '}
              <Button onClick={() => addCart(product)}>ADD TO CART</Button>
            </Link>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      {/* <Newsletter /> */}
      {/* <Footer /> */}
    </Container>
  );
};

export default Product;
