import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import styled from 'styled-components';
// import Box from "@mui/material/Box";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Card } from '@material-ui/core';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import HowToRegIcon from '@mui/icons-material/HowToReg';
import AddRoadIcon from '@mui/icons-material/AddRoad';
import GetAppIcon from '@mui/icons-material/GetApp';
import Navbar from './Navbar';
import Footer from './Footer';

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Container = styled.div`
  width: 70%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Box = styled.div`
  display: flex;
  width: 70%;
  margin: auto;
  padding: 25px;
  background-color: white;
  margin-top: 5px;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === 'left' && '10px'};
  right: ${(props) => props.direction === 'right' && '10px'};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.p`
  font-size: 50px;
`;

const Desc = styled.h1`
  margin: 50px 0px;
  font-size: 50px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  cursor: pointer;
  color: white;
`;

const Home = () => {
  return (
    <>
      <Navbar />
      <div id="/" className="img">
        <Container style={{ textAlign: 'center', marginLeft: '13%', marginTop: '2%' }}>
          <Wrapper>
            <InfoContainer>
              <Desc style={{ fontFamily: 'Cooper Black' }}>TOGETHER FOR SUCCEESS LET US STRAT</Desc>
              <Title style={{ fontFamily: 'Brush Script MT', color: '#159b80' }}>
                Abnaas was created to boot business
              </Title>

              <Title style={{ fontFamily: 'Brush Script MT', color: '#159b80' }}>
                and be job creation for youth
              </Title>

              <Link to="/Rigster">
                <Button
                  style={{
                    color: '#159b80',
                    borderRadius: '1.2rem',
                    marginTop: '9%',
                    border: '2px solid #159b80'
                  }}
                >
                  Start now. It’s free to sign up.
                </Button>
              </Link>
            </InfoContainer>
          </Wrapper>
        </Container>
      </div>

      <div id="/About" style={{ display: 'flex', marginLeft: '1%', backgroundColor: 'white' }}>
        <div style={{ marginLeft: '5%', width: '70%', marginTop: '11px', marginTop: '3%' }}>
          <h5 id="/About" style={{ fontSize: '25px' }}>
            ABOUT US
          </h5>
          <Typography style={{ fontSize: '20px', width: '70%', marginTop: '5%' }}>
            This system is mainly based on business boosting and youth employment. Youth will have
            an account in the system and they will advertise the goods that business owners post
            inside the system. For every item that has been purchased from their account they will
            get commission
          </Typography>

          <Typography style={{ fontSize: '20px', width: '70%', marginTop: '5%' }}>
            ABNAAS was create to raise sales of small and large businesses, like wise, it will be
            job creation for youth while they will earn commission in every sale they make
          </Typography>
          <Link to="/Rigster">
            <Button
              style={{
                marginLeft: '4px',
                backgroundColor: '#159b80',
                marginTop: '10%',
                borderRadius: '5rem'
              }}
            >
              Start now. It’s free to sign up
            </Button>{' '}
          </Link>
        </div>
        <div>
          {/* <img style={{ width: '90%', borderRadius: '10px', marginTop: '9%' }} src="im.jpg" /> */}
        </div>{' '}
      </div>

      <Card
        style={{
          display: 'flex',
          marginTop: '11%',
          width: '90%',
          marginLeft: '5%',
          marginRight: '5%'
        }}
      >
        <Card style={{ width: '25%' }}>
          {/* <img src="./img9.png" style={{ width: '20%', marginLeft: '5%' }} /> */}

          <CardContent style={{ width: '90%' }}>
            <Typography variant="body2" color="text.secondary">
              <h4> 1- First platform of this kind</h4>
              ABNAAS is first system which provide affiliates to boos businesses in Somaliland
            </Typography>
          </CardContent>
        </Card>

        <Card style={{ width: '25%', paddingBottom: '5%' }}>
          {/* <img src="./download.jpeg" style={{ width: '20%', marginLeft: '5%' }} /> */}

          <CardContent style={{ width: '90%' }}>
            <Typography variant="body2" color="text.secondary">
              <h4> 2- Over (#number) youth ready for advertising</h4>
              You will found here more than (#number) of young age advertisers which will promote
              your products.
            </Typography>
          </CardContent>
        </Card>

        <Card style={{ width: '25%', paddingBottom: '5%' }}>
          {/* <img src="./download.jpeg" style={{ width: '20%', marginLeft: '5%' }} /> */}

          <CardContent style={{ width: '90%' }}>
            <Typography variant="body2" color="text.secondary">
              <h4> 3- Reliable Services and System</h4>
              We take care of your sales, invoices, affiliate and partnership accounting,
              integration with payment services
            </Typography>
          </CardContent>
        </Card>

        <Card style={{ width: '25%' }}>
          {/* <img src="./case_img_06.png" style={{ width: '100%', borderRadius: '9px' }} /> */}
        </Card>
      </Card>

      <div
        style={{
          backgroundColor: 'white',
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          width: '80%',
          marginLeft: '9%',
          borderRadius: '11px'
        }}
      >
        <Box style={{ marginTop: '5%' }}>
          <div>
            {/* <img src="./sell.jpg" style={{ width: '65%', marginTop: '5%' }} /> */}
            <h5 style={{ marginTop: '30%', fontSize: '20px' }}>For product sellers</h5>
            <Typography>
              ABNAAS was create to raise sales of small and large businesses, like wise,
              <h6 style={{ marginTop: '19px', fontSize: '17px' }}>See More..</h6>
            </Typography>
          </div>
          <div style={{ marginLeft: '20%' }}>
            {/* <img src="./aff.jpg" style={{ width: '60%' }} /> */}

            <h5 style={{ fontSize: '20px' }}>For sales partners</h5>
            <Typography>
              it will be job creation for youth while they will earn commission in every sale they
              make
            </Typography>
            <h6 style={{ marginBottom: '3%', fontSize: '17px' }}>See More..</h6>
          </div>{' '}
        </Box>
        <Link to="/Rigster">
          {' '}
          <Button
            style={{
              marginLeft: '35%',
              marginBottom: '9%',
              backgroundColor: '#159b80',
              borderRadius: '1.2rem'
            }}
          >
            Start now. It’s free to sign up.
          </Button>
        </Link>
      </div>

      <div
        id="/vendor"
        style={{
          marginTop: '10%',
          backgroundColor: 'white',
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        }}
      >
        <h1 style={{ marginLeft: '25%', paddingTop: '3%', fontSize: '25px' }}>
          PUT YOUR PRODUCT HERE ! LET US BOOST YOUR BUSINESS
        </h1>

        <div style={{ display: 'flex', marginTop: '4%' }}>
          <div style={{ marginLeft: '5%', width: '70%', marginTop: '10px' }}>
            <h5 style={{ fontSize: '25px' }}>For product sellers</h5>
            <Typography style={{ fontSize: '20px', width: '60%', marginTop: '5%' }}>
              This system will ease for you to boost your sales, it enables you to sell large number
              of items in short term. Our youth are always ready for you to advertise your product
            </Typography>
            <Link to="/Rigster">
              <Button
                style={{
                  marginLeft: '3%',
                  marginTop: '15%',
                  backgroundColor: '#159b80',
                  boxShadow: '0 4px 8px 0 black, 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                  borderRadius: '7px'
                }}
              >
                Start now. It’s free to sign up
              </Button>{' '}
            </Link>
          </div>
          <div>
            {/* <img style={{ width: '90%', borderRadius: '10px' }} src="home2_img_04.png" /> */}
          </div>{' '}
        </div>
      </div>

      <div
        id="/Affiliate"
        style={{
          backgroundColor: 'white',
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        }}
      >
        <h1 style={{ marginLeft: '25%', paddingTop: '3%', fontSize: '25px' }}>
          New World ... New Career ... New Life.
        </h1>

        <div style={{ display: 'flex', marginTop: '5%' }}>
          <div style={{ marginLeft: '5%', width: '70%', marginTop: '10px' }}>
            <div>
              <Typography style={{ fontSize: '20px' }}>Affiliates</Typography>{' '}
              <Typography style={{ fontSize: '20px' }}>Publishers</Typography>
            </div>
            <Typography style={{ fontSize: '20px', width: '60%', marginTop: '2%' }}>
              Start working in ABNAAS system at your home, earn commission, be profitable, live
              happily.
            </Typography>
            <Typography style={{ fontSize: '20px', width: '60%', marginTop: '2%' }}>
              it will be job creation for youth while they will earn commission in every sale they
              make
            </Typography>
            <Link to="/Rigster">
              <Button
                style={{
                  marginTop: '30%',
                  boxShadow: '0 4px 8px 0 , 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                  color: 'teal',
                  borderRadius: '7px'
                }}
              >
                Start now. It’s free to sign up
              </Button>{' '}
            </Link>
          </div>
          <div>
            {/* <img style={{ width: '90%', borderRadius: '10px' }} src="home2_img_04.png" /> */}
          </div>{' '}
        </div>
      </div>

      <Card
        sx={{
          minWidth: 275,
          width: '95%',
          margin: 'auto',
          backgroundColor: 'stone',
          marginTop: '50%',
          display: 'flex'
        }}
      >
        <Typography
          style={{
            fontSize: '25px',
            marginTop: '15%',
            marginLeft: '30%',
            color: 'Black',
            padding: '5px',
            borderRadius: '7px',
            position: 'relative',
            width: '40%',
            boxShadow: '0 4px 8px 0 teal, 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
          }}
        >
          Begin your success journey - Easy steps
        </Typography>
        <Typography
          style={{
            marginLeft: '10%',
            fontSize: 14,
            color: 'teal',
            fontSize: '25px',
            marginTop: '4%'
          }}
        >
          Steps
        </Typography>

        <Card style={{ width: '100%', display: 'flex', marginTop: '5%', marginLeft: '9%' }}>
          <Card style={{ width: '20%', paddingBottom: '5%' }}>
            <CardContent>
              <HowToRegIcon style={{ fontSize: '50px', marginTop: '7%' }} />
              <Typography
                sx={{ marginTop: '7%', fontSize: 14, color: 'teal', fontSize: '19px' }}
                color="text.secondary"
                gutterBottom
              >
                One{' '}
              </Typography>

              <Typography variant="body2" style={{ fontSize: '15px', marginTop: '5%' }}>
                Register <br />
              </Typography>
            </CardContent>
          </Card>
          <Card style={{ width: '20%', paddingBottom: '5%' }}>
            <CardContent>
              <AddRoadIcon style={{ marginTop: '7%', fontSize: '50px' }} />
              <Typography
                sx={{ marginTop: '7%', fontSize: 14, color: 'teal', fontSize: '19px' }}
                color="text.secondary"
                gutterBottom
              >
                two
              </Typography>

              <Typography variant="body2" style={{ fontSize: '15px' }}>
                Start putting your product here <br />
              </Typography>
            </CardContent>
          </Card>

          <Card style={{ width: '20%', paddingBottom: '5%' }}>
            <CardContent>
              <AddRoadIcon style={{ marginTop: '7%', fontSize: '50px' }} />

              <Typography
                sx={{ marginTop: '7%', fontSize: 14, fontSize: '19px', color: 'teal' }}
                color="text.secondary"
                gutterBottom
              >
                three{' '}
              </Typography>

              <Typography variant="body2" style={{ fontSize: '15px' }}>
                Let our affiliates promote your items <br />
              </Typography>
            </CardContent>
          </Card>

          <Card style={{ width: '20%', paddingBottom: '5%' }}>
            <CardContent>
              <GetAppIcon style={{ marginTop: '7%', fontSize: '50px' }} />
              <Typography
                sx={{ marginTop: '7%', fontSize: 14, fontSize: '19px', color: 'teal' }}
                color="text.secondary"
                gutterBottom
              >
                four{' '}
              </Typography>

              <Typography variant="body2" style={{ fontSize: '15px' }}>
                Get paid. On time. Every time.
                <br />
              </Typography>
            </CardContent>
          </Card>
        </Card>
      </Card>
      <Footer />
    </>
  );
};

export default Home;
