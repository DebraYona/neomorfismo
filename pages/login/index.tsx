import { NextPage } from 'next';
import NoSSR from 'react-no-ssr';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import MainLayout from '../../components/global/layout';
import Ingresar from '../../components/login/login';
import Register from '../../components/login/register';

const Login: NextPage = () => {
  return (
    <MainLayout title="Login" description="Login">
      <LoginContainer>
        <CenterContainer>
          <Row>
            <Col xs={24} md={12} lg={12} span={12}>
              <Ingresar />
            </Col>
            <Col xs={24} md={12} lg={12} span={12}>
              <Register />
            </Col>
          </Row>
        </CenterContainer>
      </LoginContainer>
    </MainLayout>
  );
};

const LoginContainer = styled.div`
  padding: 1rem 1.8rem 1rem 1.8rem;
  justify-content: center;
  align-items: center;
`;

const CenterContainer = styled.div`
  margin: auto;
  width: 70%;
  margin-top: 90px;
`;
export default Login;
