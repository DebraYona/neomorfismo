import { FC } from 'react';
import { Row, Col, Input } from 'antd';
import styled from 'styled-components';

const Twinexchange: FC = () => {
  return (
    <Row style={{ }}>
      <Col span={6}>
      </Col>
      <Col span={15} style={{ }}>
       
        <Containerwallet>
          <ContainerTwinexchange banco="12385858712312" beneficiario="23123147672312" />
          
        </Containerwallet>
      </Col>
    </Row>
  );
};

interface ConteinerTwinexchangeProps {
  banco: string;
  beneficiario: string;
}

const ContainerTwinexchange: FC<ConteinerTwinexchangeProps> = ({
  banco = '564645745325561',
  beneficiario = '123123123123123',
}) => {
  return (
    <>
      <Row>
        <Type>Elige tu monedero</Type>
      </Row>
      <Row>
        <BodyWrapper>
          <Body>
            <ImageCoin src="twinpay.svg" />
            <BodyCoin>
             <InfoCoin>Twincoins</InfoCoin>
             <InfoSaldo>saldo disponible: 0.00</InfoSaldo>
            </BodyCoin>
            <ButtonSelect><ImageSelect src="selec.svg" /></ButtonSelect>
          </Body>         
        </BodyWrapper>
        <Row>
          <Type>Cantidad</Type>
        </Row>
        <BodyWrapper>          
          <Body>
            <StyledInput value="0.00" suffix="TWC" />   
          </Body>         
        </BodyWrapper>
      </Row>
      
      <Row>
        <Type>destinatario</Type>
      </Row>
      <Row>
        <BodyWrapper>
          <Body>
            <ImageUser src="user.svg" />
            <BodyCoin>
             <InfoCoin>Edgar Coss</InfoCoin>
            </BodyCoin>
          </Body>         
        </BodyWrapper>
      </Row>
      <Row>
        <ButtonEnviar>
         ENVIAR 
        </ButtonEnviar>
      </Row>
    </>
  );
};

const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  margin: 4px 8px 10px 8px;

  & > div {
    margin-left: 12px;
    margin-right: 12px;
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;
const ButtonCanjear = styled.button`
  width: 60px;
  height: 60px;
  margin: 10px auto 10px auto;
  box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;
  border-radius: 10px;

`
const ButtonSelect = styled.button`
  width: 40px;
  height: 35px;
  margin: auto ;
  box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;
  border-radius: 10px;
  font-weight:600;
`
const ButtonEnviar = styled.button`
  width: 250px;
  height: 60px;
  margin: 30px auto 10px auto;
  box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;
  border-radius: 25px;
  font-weight:600;
  color: #9e9e9e;
  font-size: 20px;
`
const ImageCoin = styled.img`
  width: 50px;
  height: 50px;
  margin: auto;
`
const ImageSelect = styled.img`
  width: 25px;
  height: 25px;
`
const ImageUser = styled.img`
  width: 40px;
  height: 40px;
`
const StyledInput = styled(Input)`
  padding: 12px 24px 12px 24px;
  border-color: #ffffff;
  
  & .ant-input {
    color: #9e9e9e;
  }
  & .ant-input-suffix{
    color: #9e9e9e;
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
const InfoCoin = styled.div`
  flex: 1 1 auto;
  color: #9e9e9e;
  display: flex;
  align-items: center;
  font-weight:600;
  font-size: 20px;
`;
const InfoSaldo = styled.div`
  flex: 1 1 auto;
  color: #9e9e9e;
  display: flex;
  align-items: center;
  font-size: 16px;
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
  flex-flow: row wrap;
  border-radius: 15px;
  padding-left: 16px;
  padding-right: 16px;
  box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;
`;
const BodyCoin = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-flow: column wrap;
  padding-left: 16px;
  padding-right: 16px;
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


export default Twinexchange;
