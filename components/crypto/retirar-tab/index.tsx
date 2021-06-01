import { FC } from 'react';
import { useRouter } from 'next/router';
import { Row, Col } from 'antd';
import styled from 'styled-components';
import Methods from './methods';

const RetirarTab: FC = () => {
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
            <TitleAction>RETIRAR</TitleAction>
            <TitleSub>TARJETA DE CRÉDITO O DÉBITO</TitleSub>
          </LeftTitle>
          <Col span={24} />
        </StyledRow>
      );
    case 'criptomonedas':
      return (
        <StyledRow>
          <LeftTitle>RETIRAR</LeftTitle>
          <Col span={24}>
            <TitleSub>CUENTAS DE CRIPTOMONEDAS</TitleSub>
          </Col>
        </StyledRow>
      );
    case 'store':
      return (
        <StyledRow>
          <LeftTitle>RETIRAR</LeftTitle>
          <Col span={24}>
            <TitleSub>TIENDAS AUTORIZADAS</TitleSub>
          </Col>
        </StyledRow>
      );
    default:
      return (
        <StyledRow>
          <LeftTitle>RETIRAR</LeftTitle>
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
export default RetirarTab;
