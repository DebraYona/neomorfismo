import { NextPage } from 'next';
import NoSSR from 'react-no-ssr';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import MainLayout from '../../components/global/layout';
import TabButton from '../../components/transaction/tabsButton';
import Clave from '../../components/perfil/clave';

const Transaction: NextPage = () => {
  return (
    <MainLayout title="Transacciones" description="Transaction">
      <TransactionContainer>
        <NoSSR>
          <Row>
            <TabButton title="TRANSACCIÓN" />
            <TabButton title="ENVIADOS" />
            <TabButton title="RECIBIDOS" />
          </Row>
        </NoSSR>
      </TransactionContainer>
    </MainLayout>
  );
};

const TransactionContainer = styled.div`
  padding: 1rem 1.8rem 1rem 1.8rem;
  justify-content: center;
  align-items: center;
`;
export default Transaction;
