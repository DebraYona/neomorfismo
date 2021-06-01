import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import Methods from './methods';
import Twinexchange from './twinexchange';
import Twinebusiness from './twinebusiness';
import DepositoSpei from './deposito-spei';
import CardMethod from './card-method';
import CriptoCurrency from './criptocurrency';

const EnviarTab: FC = () => {
  const { query } = useRouter();
  let currentMethod: string;

  if (Array.isArray(query.method)) {
    currentMethod = query.method[0];
  } else {
    currentMethod = query.method;
  }

  switch (currentMethod) {
    case 'exchange':
      return (
        <StyledRow>
          <LeftTitle>
            <TitleAction>ENVIAR</TitleAction>
            <TitleSub>METODOS DE ENVÍO</TitleSub>
            <TitleSub>USUARIOS DE TWINEXCHANGE</TitleSub>
          </LeftTitle>
          <Col span={24} >
            <Twinexchange />
          </Col>
        </StyledRow>
      );
    case 'business':
      return (
        <StyledRow>
          <LeftTitle>
            <TitleAction>ENVIAR</TitleAction>
            <TitleSub>USUARIOS DE TWINBUSINESS</TitleSub>
          </LeftTitle>
          <Col span={24} >
            <Twinebusiness />
          </Col>
        </StyledRow>
      );
    case 'card':
      return (
        <StyledRow>
          <LeftTitle>
            <TitleAction>ENVIAR</TitleAction>
            <TitleSub>TARJETA DE CRÉDITO O DÉBITO</TitleSub>
          </LeftTitle>
          <Col span={24} >
            <CardMethod />
          </Col>
        </StyledRow>
      );
    case 'wallet':
      return (
        <StyledRow>
          <LeftTitle>
            <TitleAction>ENVIAR</TitleAction>
            <TitleSub>MIS MONEDEROS</TitleSub>
          </LeftTitle>
          <Col span={24} >
            <Twinebusiness />
          </Col>
        </StyledRow>
      );
    case 'criptomonedas':
      return (
        <StyledRow>
          <LeftTitle>ENVIAR</LeftTitle>
          <TitleSub>CUENTAS DE CRIPTOMONEDAS</TitleSub>
          <Col span={24}>
            <CriptoCurrency />
          </Col>
        </StyledRow>
      );
    case 'deposito':
      return (
        <StyledRow>
          <LeftTitle>
          <TitleAction>ENVIAR</TitleAction>
          <TitleSub>DEPOSITO CON SPEI</TitleSub>
          </LeftTitle>
          <Col span={24}>
            <DepositoSpei />
          </Col>
        </StyledRow>
      );
    default:
      return (
        <StyledRow>
          <LeftTitle>ENVIAR</LeftTitle>
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
export default EnviarTab;
