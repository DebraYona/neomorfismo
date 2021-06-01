import { FC } from 'react';
import styled from 'styled-components';
import { Button, Row, List, Typography, Col } from 'antd';
import { ColoredButton } from '../buy-sell-currency-card-form';

const data = [
  '$   2131321312.333',
  '$   2131321312.333',
  '$   2131321312.333',
  '$   2131321312.333',
  '$   2131321312.333',
  '$   2131321312.333',
  '$   2131321312.333',
  '$   2131321312.333',
  '$   2131321312.333',
];

const OrderBook: FC = () => {
  return (
    <Container>
      <Row>
        <Col span={24}>
          <FilterButton size="large">Libro de ordenes</FilterButton>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <ColPadding>
            <ColoredButton color="#CC0000">VENTAS</ColoredButton>
            <Spacing />
            <StyledList
              color="#FADBD8"
              bordered
              dataSource={data}
              renderItem={(item) => <StyledListItem>{item}</StyledListItem>}
            />
          </ColPadding>
        </Col>
        <Col span={12}>
          <ColPadding>
            <ColoredButton color="#1da7ff">COMPRAS</ColoredButton>
            <Spacing />
            <StyledList
              color="#D6EAF8"
              bordered
              dataSource={data}
              renderItem={(item) => <StyledListItem>{item}</StyledListItem>}
            />
          </ColPadding>
        </Col>
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

const StyledList = styled(List)<{ color: string }>`
  background-color: ${({ color }) => color};
  border-radius: 26px;
  box-shadow: 5px 10px 5px #eeeeee;
  overflow: hidden;
`;

const StyledListItem = styled(List.Item)`
  &.ant-list-item {
    border-bottom: 0;
    justify-content: space-around;
  }
`;

const ColPadding = styled.div`
  padding: 8px;
  display: block;
  align-content: center;
`;

const Spacing = styled.div`
  height: 18px;
  width: 100%;
`;

const FilterButton = styled(Button)`
  display: block;
  font-size: 24px;
  height: auto;
  border-radius: 24px;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  margin-top: 10px;
  box-shadow: 7px 7px 14px #d9d9d9, -7px -7px 14px #ffffff;
  border: 0;
`;

export default OrderBook;
