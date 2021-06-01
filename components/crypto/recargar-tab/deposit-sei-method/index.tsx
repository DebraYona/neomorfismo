import { FC } from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';

const DepositSpei: FC = () => {
  return (
    <Row style={{ paddingTop: '25px' }}>
      <Col span={6}>
      </Col>
      <Col span={15} style={{ }}>
        <TextInfo>
            DEPOSITAR CON SPEI
        </TextInfo>
        <Containerwallet>
          <ContainerSpei banco="12385858712312" beneficiario="23123147672312" />
          
        </Containerwallet>
      </Col>
    </Row>
  );
};

interface ConteinerSpeiProps {
  banco: string;
  beneficiario: string;
}

const ContainerSpei: FC<ConteinerSpeiProps> = ({
  banco = '564645745325561',
  beneficiario = '123123123123123',
}) => {
  return (
    <>
      <Row>
        <Type>Banco </Type>
        <Stp>Sistema de transferencias y pagos(STP)</Stp>
      </Row>
      <Row>
        <BodyWrapper>
          <Body>
            <Title>{banco}</Title>
          </Body>
        </BodyWrapper>
      </Row>
      <Row>
        <Type>Beneficiario:</Type>
      </Row>
      <Row>
        <BodyWrapper>
          <Body>
            <Title>{beneficiario}</Title>
          </Body>
        </BodyWrapper>
      </Row>
      <Row>
        <BodyWrapper>
          <Message >
            <Title>Importante</Title>
            <Monto>Solamente se puede depositar desde cuentas bancarias bajo tu nombre .</Monto>       
            <Monto>Puedes depositar hasta $2, $2,974,122. 75 MXN</Monto>            
     
          </Message>
        </BodyWrapper>
      </Row>
      <Row>
        <ButtonEnviar>
         COMPRAR TWINS
        </ButtonEnviar>
      </Row>
    </>
  );
};

const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  margin: 4px 8px 4px 8px;

  & > div {
    margin-left: 12px;
    margin-right: 12px;
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;

const Title = styled.div`
  flex: 1 1 auto;
  color: #9e9e9e;
  display: flex;
  align-items: center;
  font-weight:600;
  font-size: 20px;
`;
const Stp = styled.div`
  margin: 12px 20px 4px 30px;
  color: #9e9e9e;
  display: flex;
  align-items: center;
  font-size: 20px;
  margin-left: auto;
`;
const Type = styled.div`
  margin: 12px 30px 4px 30px;
  color: #1da7ff;
  font-size: 18px;
  margin-right: auto;
`;
const TextInfo = styled.div`
  flex: 1 1 auto;
  color: #9e9e9e;
  font-size: 20px;
  font-weight: 600;
  align-items:center;
`;
const ButtonEnviar = styled.button`
  width: 250px;
  height: 60px;
  margin: 40px auto 10px auto;
  box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;
  border-radius: 25px;
  font-weight:600;
  color: #9e9e9e;
  font-size: 20px;
`
const TitleAction = styled.div`
  flex: 1 1 auto;
  color: #9e9e9e;
  font-size: 25px;
`;

const Monto = styled.div`
  flex: 0 0 25px;
  color: #9e9e9e;
  display: flex;
  align-items: center;
  font-size:16px;
`;

const Containerwallet = styled.div`
 margin: auto;
 padding-top:20px;
 padding-right: 100px;

`;

const Body = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-flow: column wrap;
  border-radius: 15px;
  padding-left: 16px;
  padding-right: 16px;
  box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;
`;
const Message = styled.div`
  margin-top: 24px;
  flex: 1 1 auto;
  display: flex;
  flex-flow: column wrap;
  border-radius: 15px;
  padding-left: 16px;
  padding-right: 16px;
  align-items: center;
  box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;
`;


export default DepositSpei;
