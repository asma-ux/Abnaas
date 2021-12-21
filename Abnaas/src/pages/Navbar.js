import { Badge } from '@material-ui/core';
import { Button } from '@material-ui/core';
import * as Scroll from 'react-scroll';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import Login from './Login';
// import Register from './LoginVendor';
import { Modal } from '@material-ui/core';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Model } from 'mongoose';

const Container = styled.div`
  height: 90px;
`;

const Wrapper = styled.div`
  position: fixed;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: flex-end;
`;

const Logo = styled.h1`
  font-weight: bold;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 20px;
  cursor: pointer;
  margin-left: 25px;

  justify-content: space-between;
  font-family: Times New Roman;
`;

// const styles = theme => ({
//   ...
//   tr: {
//     background: "#f1f1f1",
//     '&:hover': {
//        background: "#f00",
//     },
//   },
//   ...
// });

const Navbar = () => {
  const token = JSON.parse(localStorage.getItem('user'));
  const [open, setOpen] = useState(false);
  console.log(open);
  let history = useNavigate();

  const Logout = () => {
    localStorage.clear();

    reload();
  };

  // const remove=()=>{
  //     const removeuser = JSON.parse(localStorage.removeItem(("user")))

  // }

  function reload() {
    window.location.reload();
    navigate('/');
  }
  return (
    <Container id="/">
      <Wrapper>
        <Left>
          <Logo>
            <img style={{ width: '200px' }} alt="Not found" src="./Logo.png" />
          </Logo>
        </Left>

        <Center style={{ marginLeft: '50%', textDecorationLine: 'none' }}>
          <Scroll.Link
            to="/"
            smooth={true}
            duration={1000}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <Link to="/" style={{ textDecorationLine: 'none' }}>
              <MenuItem style={{ color: 'teal' }}>Home</MenuItem>
            </Link>
          </Scroll.Link>

          {localStorage.getItem('user') !== null && (
            <>
              {JSON.parse(localStorage.getItem('user')).role === 'user' && (
                <Link to={`/product`} style={{ textDecoration: 'none', color: 'black' }}>
                  <MenuItem>Products</MenuItem>
                </Link>
              )}
            </>
          )}

          <Scroll.Link
            to="/vendor"
            smooth={true}
            duration={1000}
            style={{ textDecoration: 'none', color: 'black' }}
          >
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
              <MenuItem>Vendor </MenuItem>
            </Link>
          </Scroll.Link>

          <Scroll.Link to="/vendor" smooth={true} duration={1000}>
            <Link to="/" style={{ color: 'black', textDecorationLine: 'none' }}>
              <MenuItem>Affiliate </MenuItem>
            </Link>
          </Scroll.Link>

          <MenuItem>About </MenuItem>

          <MenuItem>Contact </MenuItem>
        </Center>

        <Right style={{ marginLeft: '20%' }}>
          {localStorage.getItem('user') === null && (
            <>
              {JSON.parse(localStorage.getItem('user')) !== 'user' && (
                <Link to="/login" style={{ textDecorationLine: 'none' }}>
                  <Button
                    // onClick={() => setOpen(true)}
                    style={{
                      backgroundColor: 'white',
                      borderRadius: '50px',
                      border: '2px solid #159b80',
                      width: ' 100%',
                      padding: '.2rem 1.3rem'
                    }}
                  >
                    Login
                  </Button>
                </Link>
              )}
            </>
          )}

          {localStorage.getItem('user') === null && (
            <>
              {JSON.parse(localStorage.getItem('user')) !== 'user' && (
                // <Link to="/Rigster" style={{ textDecorationLine: 'none' }}>
                <Button
                  style={{
                    backgroundColor: '#159b80',
                    borderRadius: '50px',
                    width: '100%',
                    padding: '.2rem 1.3rem',
                    border: '2px solid #159b80',
                    marginLeft: '5%'
                  }}
                  onClick={() => setOpen(true)}
                >
                  Singup
                </Button>
              )}
            </>
          )}

          {localStorage.getItem('user') !== null && (
            <>
              {JSON.parse(localStorage.getItem('user')).role === 'user' && (
                <Button
                  onClick={() => Logout()}
                  style={{
                    backgroundColor: '#red',
                    borderRadius: '50px',
                    width: '100%',
                    padding: '.2rem 1.3rem',
                    border: '2px solid #159b80',
                    marginLeft: '5%'
                  }}
                >
                  Logout
                </Button>
              )}
            </>
          )}
        </Right>

        {/* <Modal open={open}   ><Login/>
</Modal> */}

        {/* <Modal open={open}   ><Register/>
</Modal> */}
      </Wrapper>
      {/* {products.map((product) => (
<h1>{product.Name}</h1>      ))} */}
    </Container>
  );
};

export default Navbar;
