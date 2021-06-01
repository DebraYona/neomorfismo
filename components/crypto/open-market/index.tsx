import { FC } from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import ResponsiveTable from '../responsive-table';

const dataSource = [
  {
    key: '1',
    market: 'TWC',
    icon: './twin.svg',
    info: '-',
    price: 123.32,
    volume: 1231231,
    change: -23,
  },
  {
    key: '2',
    market: 'TWC',
    icon: './twin.svg',
    info: '-',
    price: 123.32,
    volume: 1231231,
    change: -23,
  },
  {
    key: '3',
    market: 'TWC',
    icon: './twin.svg',
    info: '-',
    price: 123.32,
    volume: 1231231,
    change: -23,
  },
  {
    key: '4',
    market: 'TWC',
    icon: './twin.svg',
    info: '-',
    price: 123.32,
    volume: 1231231,
    change: -23,
  },
  {
    key: '5',
    market: 'TWC',
    icon: './twin.svg',
    info: '-',
    price: 123.32,
    volume: 1231231,
    change: -23,
  },
  {
    key: '6',
    market: 'TWC',
    icon: './twin.svg',
    info: '-',
    price: 123.32,
    volume: 1231231,
    change: -23,
  },
];

const columns = [
  {
    title: 'Mercado',
    render: tags =>(
      <div>
        <ImgStyle src="./btc.svg"/>
         market
      </div>
    ),
    dataIndex: 'market',
    key: 'market',
  },
  {
    title: 'Info',
    dataIndex: 'info',
    key: 'info',
  },
  {
    title: 'Precio',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Volumen',
    dataIndex: 'volume',
    key: 'volume',
  },
  {
    title: 'Cambio en 24H',
    dataIndex: 'change',
    key: 'change',
  },
];

const OpenMarket: FC = () => {
  return (
    <Container>
      <Row>
        <Title>MERCADO ABIERTO</Title>
      </Row>
      <Row>
        <Col span={24}>
          <ResponsiveTable columns={columns} data={dataSource} />
        </Col>
      </Row>
    </Container>
  );
};

const Container = styled.div`
  padding: 8px;
  box-shadow: 7px 7px 14px #d9d9d9, -7px -7px 14px #ffffff;
  border-radius: 25px;
  overflow: hidden;
`;

const Title = styled.div`
  padding: 8px 12px 8px 12px;
  font-size: 24px;
  font-weight: 300;
`;
const ImgStyle = styled.img`
  width: 30px;
  margin-right: 12px;

`;

export default OpenMarket;
