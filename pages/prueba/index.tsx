import { NextPage } from 'next';
import NoSSR from 'react-no-ssr';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import MainLayout from '../../components/global/layout';
import Profile from '../../components/perfil/profile';
import Wallet from '../../components/wallet';

const Prueba: NextPage = () => {
  return (
    <MainLayout title="Prueba" description="Prueba">
      <NoSSR>
        <Wallet />
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
export default Prueba;
