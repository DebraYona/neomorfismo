import { NextPage } from 'next';
import NoSSR from 'react-no-ssr';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import MainLayout from '../../components/global/layout';
import Profile from '../../components/perfil/profile';
import Clave from '../../components/perfil/clave';

const Perfil: NextPage = () => {
  return (
    <MainLayout title="Perfil" description="Perfil">
      <NoSSR>
        <Col xs={24} md={24} lg={12} span={12}>
          <Profile />
        </Col>
      </NoSSR>
    </MainLayout>
  );
};

const PerfilContainer = styled.div`
  padding: 2rem 2.8rem 1rem 1.8rem;
  justify-content: center;
  align-items: center;
`;
const StyledContainer = styled.div``;
export default Perfil;
