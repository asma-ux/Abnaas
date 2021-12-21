import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter
} from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <>
      <Container
        style={{
          borderRadius: '5px',
          backgroundColor: '#f7f7f7',
          marginTop: '5%',
          marginBottom: '0.3%',
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        }}
      >
        <Left>
          <Logo>
            {' '}
            {/* <img style={{ width: '30%', borderRadius: '10px' }} src="log1.jpeg" />. */}
          </Logo>
          <Desc>
            There are many variations of passages of Lorem Ipsum available, but the majority have
            suffered alteration in some form, by injected humour, or randomised words which don’t
            look even slightly believable.
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          {/* <img style={{ width: '80%', borderRadius: '10px' }} src="log1.jpeg" /> */}
        </Center>
        <Right>
          <ContactItem>
            <Room style={{ marginRight: '10px' }} />
          </ContactItem>
          <ContactItem>
            <Phone style={{ marginRight: '10px' }} />
          </ContactItem>
          <ContactItem>
            <MailOutline style={{ marginRight: '10px' }} />
          </ContactItem>
        </Right>
      </Container>
      <Container
        style={{
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
          padding: '4%',
          backgroundColor: '#1abc9c'
        }}
      >
        © 2021 Abnaas
      </Container>
    </>
  );
};

export default Footer;
