import { Col, Row } from 'antd';
import { FC } from 'react';
import GraphTableCard from '../graph-table-card';
import BuySell from '../buy-sell';
import Orders from '../orders';
import OrderBook from '../order-book';
import OpenMarket from '../open-market';
import TwinpayTab from '../twinpay-tab';
import EnviarTab from '../enviar-tab';
import CanjearTab from '../canjear-tab';
import RetirarTab from '../retirar-tab';
import RecargarTab from '../recargar-tab';
import RecibirTab from '../recibir-tab';
import QrTab from '../qr-tab';
import WalletTab from '../wallet-tab';
import {SelectCurrent} from './currency';

interface MainViewProps {
  action: string;
  currency: string;
}



const MainView: FC<MainViewProps> = ({ action, currency }) => {
  switch (action) {
    case 'wallet':
      return <WalletTab current={SelectCurrent(currency)} />;
    case 'qr':
      return <QrTab />;  
    case 'twinpay':
      return <TwinpayTab />;
    case 'deposit':
      return <RecargarTab />;
    case 'retire':
      return <RetirarTab />;
    case 'send':
      return <EnviarTab />;
    case 'receive':
      return <RecibirTab />;
    case 'exchange':
      return <CanjearTab />;
    default:
      return (
        <div>
          <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 24 }, 12]}>
            <Col className="gutter-row" xs={24} md={14} lg={14}>
              <div>
                <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 24 }, 8]}>
                  <Col className="gutter-row" span={24}>
                    <GraphTableCard current={SelectCurrent(currency)}/>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col className="gutter-row" xs={24} md={10} lg={10}>
              <BuySell />
            </Col>
          </Row>
          <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 24 }, 12]}>
            <Col className="gutter-row" xs={24} md={14} lg={14}>
              <Orders />
            </Col>
            <Col className="gutter-row" xs={24} md={10} lg={10}>
              <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 24 }, 8]}>
                <Col className="gutter-row" span={24}>
                  <OrderBook />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 24 }, 12]}>
            <Col className="gutter-row" span={24}>
              <OpenMarket />
            </Col>
          </Row>
        </div>
      );
  }
};

export default MainView;
