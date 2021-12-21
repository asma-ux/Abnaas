import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { margin } from '@mui/system';

// export default function AddressForm() {
//   return (
// <React.Fragment >
//     <div style={{width:"35%", margin:"auto", boxShadow:
//         "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} >
//             <div style={{margin:"9%"}}>
//   <Typography   variant="h6" gutterBottom  style={{paddingTop:"9%"}}>
//     Shipping address
//   </Typography>
//   <Grid container spacing={3}>
//     <Grid item xs={12} sm={6}>
//       <TextField
//         required
//         id="firstName"
//         name="firstName"
//         label="First name"
//         fullWidth
//         autoComplete="given-name"
//         variant="standard"
//       />
//     </Grid>
//     <Grid item xs={12} sm={6}>
//       <TextField
//         required
//         id="lastName"
//         name="lastName"
//         label="Last name"
//         fullWidth
//         autoComplete="family-name"
//         variant="standard"
//       />
//     </Grid>
//     <Grid item xs={12}>
//       <TextField
//         required
//         id="address1"
//         name="address1"
//         label="Address line 1"
//         fullWidth
//         autoComplete="shipping address-line1"
//         variant="standard"
//       />
//     </Grid>
//     <Grid item xs={12}>
//       <TextField
//         id="address2"
//         name="address2"
//         label="Address line 2"
//         fullWidth
//         autoComplete="shipping address-line2"
//         variant="standard"
//       />
//     </Grid>
//     <Grid item xs={12} sm={6}>
//       <TextField
//         required
//         id="city"
//         name="city"
//         label="City"
//         fullWidth
//         autoComplete="shipping address-level2"
//         variant="standard"
//       />
//     </Grid>
//     <Grid item xs={12} sm={6}>
//       <TextField
//         id="state"
//         name="state"
//         label="State/Province/Region"
//         fullWidth
//         variant="standard"
//       />
//     </Grid>
//     <Grid item xs={12} sm={6}>
//       <TextField
//         required
//         id="zip"
//         name="zip"
//         label="Zip / Postal code"
//         fullWidth
//         autoComplete="shipping postal-code"
//         variant="standard"
//       />
//     </Grid>
//     <Grid item xs={12} sm={6}>
//       <TextField style={{paddingBottom:"50%"}}
//         required
//         id="country"
//         name="country"
//         label="Country"
//         fullWidth
//         autoComplete="shipping country"
//         variant="standard"
//       />
//     </Grid>

//   </Grid></div></div>
// </React.Fragment>
//   );
// }

import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
const Container = styled.div``;

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
  color: teal;
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
  height: 50vh;
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
  background-color: teal;
  color: white;
  font-weight: 600;
`;

const Checkout = () => {
  //   const History = useHistory();
  const [Shipping, setShipping] = useState({
    firstName: '',
    secondName: '',
    email: '',
    shipping: '',
    phone: ''
  });
  const cart = JSON.parse(localStorage.getItem('cart'));

  const [Cart, setcart] = useState(cart);

  const [qty, setqty] = useState(cart[0].quantity);

  function placeOrder() {
    const data = { ...Shipping, Cart };
    axios.post('http://localhost:8000/order', data);
    // History.push('/Checkoutorder');
  }

  return (
    <Container>
      <Wrapper style={{ marginTop: '5%' }}>
        {' '}
        <Bottom>
          <React.Fragment>
            <div
              style={{
                width: '50%',
                margin: 'auto',
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
              }}
            >
              <div style={{ margin: '9%' }}>
                <Typography variant="h6" gutterBottom>
                  Billing details{' '}
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="firstName"
                      name="firstName"
                      label="First name"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      onChange={(e) => setShipping({ ...Shipping, firstName: e.target.value })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="lastName"
                      name="lastName"
                      label="Last name"
                      fullWidth
                      autoComplete="family-name"
                      variant="standard"
                      onChange={(e) => setShipping({ ...Shipping, secondName: e.target.value })}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      id="address1"
                      name="Email"
                      label="Email"
                      fullWidth
                      autoComplete="shipping address-line1"
                      variant="standard"
                      onChange={(e) => setShipping({ ...Shipping, email: e.target.value })}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="address2"
                      name="Phone Numbe"
                      label="Phone Numbe"
                      fullWidth
                      autoComplete="shipping address-line2"
                      variant="standard"
                      onChange={(e) => setShipping({ ...Shipping, phone: e.target.value })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="Address"
                      name="city"
                      label="Address"
                      fullWidth
                      autoComplete="shipping address-level2"
                      variant="standard"
                      onChange={(e) => setShipping({ ...Shipping, Address: e.target.value })}
                    />
                  </Grid>
                </Grid>
              </div>
            </div>
          </React.Fragment>

          <div
            style={{
              width: '25%',
              marginRight: '10%',
              boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
              borderRadius: '5px',
              backgroundColor: '#1abc9c'
            }}
          >
            <Summary>
              <SummaryItemText style={{ color: 'white', fontSize: '35px' }}>
                YOUR ORDER{' '}
              </SummaryItemText>
              <SummaryItem>
                <SummaryItemText>Name</SummaryItemText>
                <SummaryItemPrice> {cart[0].name}</SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Price</SummaryItemText>
                <SummaryItemPrice>$ {cart[0].price}</SummaryItemPrice>
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
                <SummaryItemPrice>${cart[0].price * qty}</SummaryItemPrice>
              </SummaryItem>
              <Button
                style={{ backgroundColor: 'white', color: 'black', borderRadius: '5px' }}
                onClick={() => placeOrder()}
              >
                Proceed to checkout
              </Button>
            </Summary>{' '}
          </div>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Checkout;
