import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import { BrowserRouter as Router } from 'react-router-dom';
import { toast } from 'react-toastify';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 70vw;
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
  margin-bottom: 90px;
  margin-left: 40%;
  width: 30%;
  padding: 25px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

const Title = styled.h1`
  font-size: 26px;
  font-weight: 300;
  color: teal;
`;

const Form = styled.form``;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 5px;
  background-color: teal;
  color: white;
  cursor: pointer;
  border-radius: 10px;
`;

const Login = () => {
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem('user'));
  // console.log(token._id);
  const [user, setUser] = useState({
    Email: '',
    password: ''
  });

  function login() {
    axios.post(`http://localhost:8000/users/signin`, user, token).then((res) => {
      const user = localStorage.setItem('user', JSON.stringify(res.data.user));
      localStorage.setItem('token', JSON.stringify(res.data.token));
      toast.success('User logged in');

      // navigate('/');
      if (res.data.user.role === 'user') {
        navigate('/product');
      } else if (res.data.user.role === 'vendor') {
        navigate('/dashboard/app');
      } else {
        navigate('/');
      }
      window.location.reload();

      // else if(res.data.user.role === 'vendor'){
      //   history.push(`/vendor`);
      //  }else{
      //   history.push(`/affilate`);
      //  }
    });
  }
  return (
    <div class="container">
      <span class="big-circle"></span>
      {/* <img src="img/shape.png" class="square" alt="" /> */}
      <div class="form">
        <div class="contact-info">
          {/* <img src="log1.jpeg" style={{ width: '100%' }}></img> */}
        </div>

        <div class="contact-form">
          <span class="circle one"></span>
          <span class="circle two"></span>
          <Form>
            <h1 style={{ color: 'white' }}>login</h1>

            <TextField
              id="standard"
              label="Email"
              variant="outlined"
              style={{
                width: '100%',
                margin: '20px 10px 0px 0px',
                borderRadius: '5px',
                backgroundColor: 'white'
              }}
              onChange={(e) => setUser({ ...user, Email: e.target.value })}
            />
            {/* <h3></h3> */}
            <TextField
              id="standard"
              label="password"
              variant="outlined"
              style={{
                width: '100%',
                margin: '20px 10px 0px 0px',
                borderRadius: '5px',
                backgroundColor: 'white'
              }}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          </Form>{' '}
          <Button
            onClick={() => login()}
            style={{
              marginTop: '10%',
              backgroundColor: 'white',
              color: 'black',
              padding: '3%',
              fontSize: '15px',
              marginLeft: '10%'
            }}
          >
            Register Now
          </Button>
        </div>
      </div>
    </div>

    //   <Container>
    //     <Wrapper>
    //       <Title>Login</Title>
    //       <Form>

    //         <TextField  id="standard" label="Email" variant="standard"  style={{
    // width: "100%",
    // margin: "20px 10px 0px 0px",
    // padding: "10px",
    // }}
    // onChange={(e)=>setUser({...user,Email:e.target.value})}/>
    // <h3></h3>
    //         <TextField id="standard" label="password" variant="standard" style={{
    // width: "100%",
    // margin: "20px 10px 0px 0px",
    // padding: "10px",
    // }}
    // onChange={(e)=>setUser({...user,password:e.target.value})} />

    //       </Form>
    //  <Button  onClick={() => login()} style={{marginTop:"10%" ,padding:"3%",fontSize:"15px"}} >Register Now</Button>
    //     </Wrapper>
    //   </Container>
  );
};

export default Login;
