import styled from 'styled-components';
import { FC, useState } from 'react';
import { Row, Button, Typography, Col, Card } from 'antd';
import TwinTab from 'components/global/twin-tab';
import MyResponsiveLine from '../crypto-line-chart';
import ResponsiveTable from '../responsive-table';
import BuySellCurrencyCardForm from '../buy-sell-currency-card-form';

const LIMIT_VIEW = 0;
const MARKET_VIEW = 1;

const BuySell: FC = () => {
  const [currentView, setCurrentView] = useState<number>(LIMIT_VIEW);

  const setLimitView = () => setCurrentView(LIMIT_VIEW);
  const setMarketView = () => setCurrentView(MARKET_VIEW);

  const tabs = [
    {
      key: LIMIT_VIEW,
      title: 'Limite',
      onClick: setLimitView,
    },
    {
      key: MARKET_VIEW,
      title: 'Mercado',
      onClick: setMarketView,
    },
  ];

  return (
    <Container>
      <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 24 }, 12]}>
        <Col className="gutter-row" span={24}>
          <Row>
            <SelectorContainer>
              <TwinTab tabs={tabs} currentView={currentView} />
            </SelectorContainer>
          </Row>
          <Row gutter={[{ xs: 8, sm: 12, md: 16, lg: 16 }, 8]}>
            <Col className="gutter-row" xs={24} lg={12}>
              <BuySellCurrencyCardForm
                title="VENDER"
                color="#CC0000"
                backgroundColor="#FADBD8"
                shadowColor={[250, 219, 216]}
              />
            </Col>
            <Col className="gutter-row" xs={24} lg={12}>
              <BuySellCurrencyCardForm
                title="COMPRAR"
                color="#1da7ff"
                backgroundColor="#D6EAF8"
                shadowColor={[214, 234, 248]}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

const Container = styled.div`
  padding: 8px 8px 22px 8px;
  box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;
  border-radius: 25px;
  overflow: hidden;
`;

const SelectorContainer = styled.div`
  width: 100%;
  padding: 8px;
  display: flex;
  justify-content: center;
  margin-bottom: 4px;
`;

export default BuySell;
