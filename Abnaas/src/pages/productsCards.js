import * as React from 'react';
// import { styled } from "@mui/material/styles";
import styled from 'styled-components';
import { typography } from '@mui/system';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Modal } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import Navbar from './Navbar';

// import { GlobalStyle } from './globalStyles';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';

const Title = styled.h1`
  font-weight: 200;
`;

const Image = styled.img`
  width: 80%;
  height: 80vh;
  object-fit: cover;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  margin-bottom: 50px;
  width: 30%;
  padding: 25px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export default function ProductCards(props) {
  const [open, setOpen] = useState(false);
  console.log(open);
  const [link, setlink] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));

  const [url, seturl] = React.useState();
  const params = useParams();
  const createUrl = (username, productId) => {
    setlink('localhost:3000/product/' + productId + '/' + username);
    // return linkpro
  };

  function promoteClick() {
    const url = createUrl(user.userName, props.data._id);
    seturl(url);
    setOpen(true);
    console.log(url);
  }

  // const [showModal, setShowModal] = useState(false);

  // const openModal = () => {
  //   setShowModal(prev => !prev);
  // };
  return (
    <>
      <Navbar />

      <Card sx={{ maxWidth: 256, marginTop: 5, marginRight: '6px' }}>
        <Link to={`/OneProduct/${props.data._id}`}>
          {' '}
          <CardMedia component="img" height="194" image="../img.jpg" alt="Paella dish" />
        </Link>

        <CardContent>
          <Typography style={{ fontSize: '25px' }}>{props.data.name}</Typography>
          <Typography style={{ fontSize: '25px' }}>{props.data.price}</Typography>

          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {/* <Button
          style={{
            color: "white",
            backgroundColor: "#019376",
          }}
        >
          Add to cart{" "}
        </Button> */}
          <Button
            style={{
              marginLeft: '10%',
              color: 'teal'
            }}
            onClick={promoteClick}
          >
            promote
          </Button>
          {/* <Modal showModal={showModal} setShowModal={setShowModal} />
        <GlobalStyle /> */}
        </CardActions>
        {/* <h1>{url}</h1> */}
        <Modal open={open} onClick={() => setOpen(false)}>
          <Container>
            <Wrapper style={{ paddingBottom: '5%' }}>
              <Title>kjhhg</Title>
              <img style={{ width: '20%' }} alt="not found" src="../img.jpg" />

              <Typography style={{ fontSize: '20px' }}>$07</Typography>

              <Link to={`/OneProduct`}>
                {' '}
                <br />
                <Typography
                  style={{
                    color: 'black',
                    boxShadow: ' 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                    paddingBottom: '2%',
                    paddingTop: '2%',
                    fontSize: '14px',
                    textAlign: 'center'
                  }}
                >
                  {link}
                </Typography>
              </Link>
            </Wrapper>
          </Container>
        </Modal>
      </Card>
    </>
  );
}
