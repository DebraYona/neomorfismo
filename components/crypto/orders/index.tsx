import styled from 'styled-components';
import { FC, useState } from 'react';
import { Row } from 'antd';
import TwinTab from 'components/global/twin-tab';
import ResponsiveTable from '../responsive-table';

const dataSource = [
  {
    key: '1',
    time: 'TWC',
    tradeId: '-',
    orderId: 123.32,
    price: 1231231,
    amount: -23,
    total: -23,
  },
  {
    key: '2',
    time: 'TWC',
    tradeId: '-',
    orderId: 123.32,
    price: 1231231,
    amount: -23,
    total: -23,
  },
  {
    key: '3',
    time: 'TWC',
    tradeId: '-',
    orderId: 123.32,
    price: 1231231,
    amount: -23,
    total: -23,
  },
  {
    key: '4',
    time: 'TWC',
    tradeId: '-',
    orderId: 123.32,
    price: 1231231,
    amount: -23,
    total: -23,
  },
  {
    key: '5',
    time: 'TWC',
    tradeId: '-',
    orderId: 123.32,
    price: 1231231,
    amount: -23,
    total: -23,
  },
  {
    key: '6',
    time: 'TWC',
    tradeId: '-',
    orderId: 123.32,
    price: 1231231,
    amount: -23,
    total: -23,
  },
];

const columns = [
  {
    title: 'Tiempo',
    dataIndex: 'time',
    key: 'time',
  },
  {
    title: 'ID de Trade',
    dataIndex: 'tradeId',
    key: 'tradeId',
  },
  {
    title: 'ID de Orden',
    dataIndex: 'orderId',
    key: 'orderId',
  },
  {
    title: 'Precio',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Monto',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
  },
];

const ACTIVE_ORDERS_VIEW = 0;
const HISTORY_VIEW = 1;

const Orders: FC = () => {
  const [currentView, setCurrentView] = useState<number>(ACTIVE_ORDERS_VIEW);

  const setActiveOrdersView = () => setCurrentView(ACTIVE_ORDERS_VIEW);
  const setHistoryView = () => setCurrentView(HISTORY_VIEW);

  const tabs = [
    {
      key: ACTIVE_ORDERS_VIEW,
      title: 'Órdenes Activas',
      onClick: setActiveOrdersView,
    },
    {
      key: HISTORY_VIEW,
      title: 'Historial',
      onClick: setHistoryView,
    },
  ];

  return (
    <Container>
      <Row>
        <Title>MIS ÓRDENES</Title>
      </Row>
      <Row>
        <SelectorContainer>
          <TwinTab tabs={tabs} currentView={currentView} />
        </SelectorContainer>
      </Row>
      <Row>
        <ElementContainer>
          {currentView === ACTIVE_ORDERS_VIEW && (
            <ResponsiveTable data={dataSource} columns={columns} />
          )}
          {currentView === HISTORY_VIEW && (
            <ResponsiveTable data={dataSource} columns={columns} />
          )}
        </ElementContainer>
      </Row>
    </Container>
  );
};

const Container = styled.div`
  padding: 8px;
  box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;
  border-radius: 25px;
  overflow: hidden;
`;

const ElementContainer = styled.div`
  width: 100%;
  height: 400px;
`;

const SelectorContainer = styled.div`
  width: 100%;
  padding: 8px;
  display: flex;
  justify-content: center;
  margin-bottom: 4px;
  & > div{
    width: 100%;
    justify-content: space-around;
    padding-left:120px;
    padding-right:120px; 
  }
`;

const Title = styled.div`
  padding: 8px 12px 8px 12px;
  font-size: 24px;
  font-weight: 300;
`;

export default Orders;
