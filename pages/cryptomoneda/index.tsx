/* eslint-disable jsx-a11y/anchor-is-valid */
import { NextPage } from 'next';
import { Col, Row } from 'antd';

import styled from 'styled-components';
import WalletButton from 'components/crypto/wallet-button';
import GraphTableCard from 'components/crypto/graph-table-card';
import Orders from 'components/crypto/orders';
import OrderBook from 'components/crypto/order-book';
import OpenMarket from 'components/crypto/open-market';
import BuySell from 'components/crypto/buy-sell';
import { useRouter } from 'next/router';
import MainView from 'components/crypto/main-view';
import Link from 'next/link';
import CurrencyCard from '../../components/crypto/currency-card';
import MainLayout from '../../components/global/layout';
import CurrencyActionButton from '../../components/crypto/currency-action-button';

const Crypto: NextPage = () => {
  const { query } = useRouter();
  const options: { action: string; currency: string } = {
    action: null,
    currency: null,
  };

  if (Array.isArray(query.action)) {
    options.action = query.action[0];
  } else {
    options.action = query.action;
  }

  if (Array.isArray(query.currency)) {
    options.currency = query.currency[0];
  } else {
    options.currency = query.currency;
  }

  return (
    <MainLayout title="Cryptomonedas" description="Cryptomonedas">
      <CryptoContainer>
        <div>
          <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 24 }, 12]}>
            <FistRow>
              <a>
                <WalletButton />
              </a>
              <Link
                href={{
                  pathname: '/cryptomoneda',
                  query: { ...options, currency: 'TWC' },
                }}
              >
                <a>
                  <CurrencyCard
                    logo="./twin.svg"
                    title="TWC"
                    descripcion="102000000"
                    selected={options.currency === 'TWC'}
                  />
                </a>
              </Link>
              <Link
                href={{
                  pathname: '/cryptomoneda',
                  query: { ...options, currency: 'MXN' },
                }}
              >
                <a>
                  <CurrencyCard
                    logo="./mxnc.svg"
                    title="MXN"
                    descripcion="102000000"
                    selected={options.currency === 'MXN'}
                  />
                </a>
              </Link>
              <Link
                href={{
                  pathname: '/cryptomoneda',
                  query: { ...options, currency: 'BTC' },
                }}
              >
                <a>
                  <CurrencyCard
                    logo="./btc.svg"
                    title="BTC"
                    descripcion="102000000"
                    selected={options.currency === 'BTC'}
                  />
                </a>
              </Link>
              <Link
                href={{
                  pathname: '/cryptomoneda',
                  query: { ...options, currency: 'LTC' },
                }}
              >
                <a>
                  <CurrencyCard
                    logo="./ltc.svg"
                    title="LTC"
                    descripcion="102000000"
                    selected={options.currency === 'LTC'}
                  />
                </a>
              </Link>
              <Link
                href={{
                  pathname: '/cryptomoneda',
                  query: { ...options, currency: 'ETH' },
                }}
              >
                <a>
                  <CurrencyCard
                    logo="./eth.svg"
                    title="ETH"
                    descripcion="102000000"
                    selected={options.currency === 'ETH'}
                  />
                </a>
              </Link>
              <Link
                href={{
                  pathname: '/cryptomoneda',
                  query: { ...options, currency: 'XRP' },
                }}
              >
                <a>
                  <CurrencyCard
                    logo="./xrp.svg"
                    title="XRP"
                    descripcion="102000000"
                    selected={options.currency === 'XRP'}
                  />
                </a>
              </Link>
            </FistRow>
          </Row>
        </div>
        <div>
          <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 24 }, 12]}>
            <SecondRow>
              <Link
                href={{
                  pathname: '/cryptomoneda',
                  query: { ...options, action: 'wallet' },
                }}
              >
                <a>
                  <CurrencyActionButton
                    logo="./monederoG.svg"
                    name="Monederos"
                    selected={options.action === 'wallet'}
                  />
                </a>
              </Link>
              <Link
                href={{
                  pathname: '/cryptomoneda',
                  query: { ...options, action: 'qr' },
                }}
              >
                <a>
                  <CurrencyActionButton
                    logo="./qr.svg"
                    name="Pago QR"
                    selected={options.action === 'qr'}
                  />
                </a>
              </Link>
              <Link
                href={{
                  pathname: '/cryptomoneda',
                  query: { ...options, action: 'twinpay' },
                }}
              >
                <a>
                  <CurrencyActionButton
                    logo="./twinpay.svg"
                    name="Twinpay"
                    selected={options.action === 'twinpay'}
                  />
                </a>
              </Link>
              <Link
                href={{
                  pathname: '/cryptomoneda',
                  query: { ...options, action: 'deposit' },
                }}
              >
                <a>
                  <CurrencyActionButton
                    logo="./recargar.svg"
                    name="Recargar"
                    selected={options.action === 'deposit'}
                  />
                </a>
              </Link>
              
              <Link
                href={{
                  pathname: '/cryptomoneda',
                  query: { ...options, action: 'exchange' },
                }}
              >
                <a>
                  <CurrencyActionButton
                    logo="./canjear.svg"
                    name="Canjear"
                    selected={options.action === 'exchange'}
                  />
                </a>
              </Link>
              <Link
                href={{
                  pathname: '/cryptomoneda',
                  query: { ...options, action: 'send' },
                }}
              >
                <a>
                  <CurrencyActionButton
                    logo="./enviar.svg"
                    name="Enviar"
                    selected={options.action === 'send'}
                  />
                </a>
              </Link>
              <Link
                href={{
                  pathname: '/cryptomoneda',
                  query: { ...options, action: 'receive' },
                }}
              >
                <a>
                  <CurrencyActionButton
                    logo="./recibir.svg"
                    name="Recibir"
                    selected={options.action === 'receive'}
                  />
                </a>
              </Link>
            </SecondRow>
          </Row>
        </div>
        <MainView {...options} />
      </CryptoContainer>
    </MainLayout>
  );
};

const CryptoContainer = styled.div`
  padding: 1rem 1.4rem 1rem 1.4rem;
`;

const FistRow = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  justify-content: space-evenly;
  width: 100%;
  margin: 0px 20px;
  & > a {
    flex: 1 1 200px;
    margin: 5px;
    @media (max-width: 940px) {
      margin: 10px;
    }
  }
`;

const SecondRow = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  overflow-x: auto;
  margin: auto;
  & > a {
    flex: 1 1 auto;
    margin: 20px;
    @media (max-width: 940px) {
      margin: 10px;
    }
  }
`;

export default Crypto;
