import { FC } from 'react';
import { useRouter } from 'next/router';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import Methods from './methods';
import CardMethod from './card-method';
import DepositSpei from './deposit-sei-method';
import AuthorizedStores from './stored-auth';
import Deposit from './deposit';


const RecargarTab: FC = () => {
  const { query } = useRouter();
  let currentMethod: string;

  if (Array.isArray(query.method)) {
    currentMethod = query.method[0];
  } else {
    currentMethod = query.method;
  }

  switch (currentMethod) {
    case 'card':
      return (
        <StyledRow>
          <LeftTitle>
            <TitleAction>RECARGAS</TitleAction>
            <TitleSub>TARJETA DE CRÉDITO O DÉBITO</TitleSub>
          </LeftTitle>
          <Col span={24}>
            <CardMethod />
          </Col>
        </StyledRow>
      );
    case 'store':
      return (
        <StyledRow>
          <LeftTitle>
            <TitleAction>RECARGAS</TitleAction>
            <TitleSub>TIENDAS AUTORIZADAS</TitleSub>          </LeftTitle>
          <Col span={24}>
            <AuthorizedStores />
          </Col>
        </StyledRow>
      );
    case 'transfer':
      return (
        <StyledRow>
          <LeftTitle>RECARGAS</LeftTitle>
          
          <Col span={24}>
          <TitleSub>TRANSFERENCIA BANCARIA</TitleSub>
          </Col>
          <Col span={24}>
            <DepositSpei />
          </Col>
        </StyledRow>
      );
    case 'deposit':
      return (
        <StyledRow>
          <LeftTitle>Recargar</LeftTitle>
          <Col span={24}>
            <TitleSub>DEPÓSITOS</TitleSub>
          </Col>
          <Col span={24}>
            <Deposit />
          </Col>
        </StyledRow>
      );
    default:
      return (
        <StyledRow>
          <LeftTitle>Recargar</LeftTitle>
          <Col span={24}>
            <Methods />
          </Col>
        </StyledRow>
      );
  }
};

const StyledRow = styled(Row)`
  position: relative;
`;

const LeftTitle = styled.div`
  flex: 1 1 auto;
  color: #9e9e9e;
  font-size: 25px;
`;
const TitleAction = styled.div`
  flex: 1 1 auto;
  color: #9e9e9e;
  font-size: 25px;
`;
const TitleSub = styled.div`
  flex: 1 1 auto;
  color: #1da7ff;
  font-size: 16px;
`;
export default RecargarTab;
