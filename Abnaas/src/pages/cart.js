import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
const Container = styled.div`
  margin-top: 4%;
  padding-bottom: 60px;
`;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === 'filled' && 'none'};
  background-color: ${(props) => (props.type === 'filled' ? 'teal' : 'transparent')};
  color: ${(props) => props.type === 'filled' && 'white'};
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  font-weight: 600;
  margin: 0px 10px;
  color: #1abc9c;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 60vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && '500'};
  font-size: ${(props) => props.type === 'total' && '24px'};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #159b80;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  const cart = JSON.parse(localStorage.getItem('cart'));
  const [Cart, setcart] = useState(cart);

  const { id } = useParams();
  const [product, setproduct] = useState([]);
  const [qty, setqty] = useState(Cart[0].quantity);
  console.log(qty + 1);
  useEffect(() => {
    axios.get(`http://localhost:8000/product/${id}`).then((res) => {
      console.log(res);
      setproduct(res.data.data);
    });
  }, []);

  return (
    <Container>
      <Wrapper>
        <Top>
          <TopTexts>
            <TopText>Shopping Bag({Cart[0].quantity})</TopText>
          </TopTexts>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <Details>
                  <ProductName>
                    <b>ProductName:</b> {Cart[0].name}
                  </ProductName>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Remove onClick={() => qty > 0 && setqty(qty - 1)} />
                  <ProductAmount>{qty}</ProductAmount>
                  <Add onClick={() => qty < 5 && setqty(qty + 1)} />
                </ProductAmountContainer>
                <ProductPrice>$ {Cart[0].price}</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
          </Info>

          <Summary style={{ backgroundColor: '#1abc9c', paddingBottom: '5%' }}>
            <SummaryItemText style={{ color: 'white', fontSize: '35px' }}>
              YOUR ORDER{' '}
            </SummaryItemText>
            <SummaryItem>
              <SummaryItemText>Name</SummaryItemText>
              <SummaryItemPrice> {Cart[0].name}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Price</SummaryItemText>
              <SummaryItemPrice>$ {Cart[0].price}</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText> Quantity</SummaryItemText>
              <SummaryItemPrice>{qty}</SummaryItemPrice>
            </SummaryItem>

            {/* <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem> */}
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>${Cart[0].price * qty}</SummaryItemPrice>
            </SummaryItem>
            <Link to={`/Checkout`}>
              {' '}
              <Button style={{ backgroundColor: 'white', color: 'black', borderRadius: '5px' }}>
                Proceed to checkout
              </Button>
            </Link>
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;
