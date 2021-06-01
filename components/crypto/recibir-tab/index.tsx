import { FC } from 'react';
import { Row, Col, Input } from 'antd';
import styled from 'styled-components';
const RecibirTab: FC = () => {
  return (
    <Row style={{ paddingTop: '50px' }}>
      <Col span={6}>
      </Col>
      <Col span={15} style={{ }}>
        <TextInfo>
            DEPOSITAR CON SPEI
        </TextInfo>
        <Containerwallet>
          <ContainerCanjear banco="12385858712312" beneficiario="23123147672312" />
          
        </Containerwallet>
      </Col>
    </Row>
  );
};
interface ConteinerCanjearProps {
  banco: string;
  beneficiario: string;
}

const ContainerCanjear: FC<ConteinerCanjearProps> = ({
  banco = '564645745325561',
  beneficiario = '123123123123123',
}) => {
  return (
    <>
      <Row>
        <Type>Elige un monedero </Type>
      </Row>
      <Row>
        <BodyWrapper>
          <Body>
            <ImageCoin src="twinpay.svg" />
            <BodyCoin>
             <InfoCoin>Peso mexicano</InfoCoin>
             <InfoSaldo>saldo disponible: 0.00</InfoSaldo>
            </BodyCoin>
            <ButtonSelect><ImageSelect src="selec.svg" /></ButtonSelect>
          </Body>         
        </BodyWrapper>
        <Type>Beneficiario:</Type>
        <BodyWrapper>
          <Body>
          <StyledInput value="0.00" suffix="TWC" />         
          </Body>         
        </BodyWrapper>
      </Row>
      <Row>
      <ButtonCanjear><ImageCanjear src="qrdart.svg" /></ButtonCanjear>
      </Row>
      <Row>
        <Type>Cantidad a obtener</Type>
      </Row>
      <Row>
        <BodyWrapper>
          <Body>
            <Title>{beneficiario}</Title>
            <ButtonSelect><ImageSelect src="compartir.svg" /></ButtonSelect>
          </Body>
          
        </BodyWrapper>
        <BodyWrapper>
          <Body>
            <StyledNota>Nota (opcional)</StyledNota>
          </Body>         
        </BodyWrapper>
      </Row>
      <Row>
        <ButtonEnviar>
         ENVIAR AL MONEDERO
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
  width: 150px;
  height: 150px;
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
  margin: 10px auto 10px auto;
  box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;
  border-radius: 25px;
  font-weight:600;
  color: #9e9e9e;
  font-size: 20px;
`
const ImageCanjear = styled.img`
  width: 130px;
  height: 130px;
  margin: auto;
`
const ImageSelect = styled.img`
  width: 25px;
  height: 25px;
`
const ImageCoin = styled.img`
  width: 50px;
  height: 50px;
`

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
  font-size: 16px;
`;
const InfoSaldo = styled.div`
  flex: 1 1 auto;
  color: #9e9e9e;
  display: flex;
  align-items: center;
  font-size: 16px;
`;
const StyledInput = styled(Input)`
  padding: 12px 24px 12px 24px;
  border-color: #ffffff;
`;
const StyledNota = styled.textarea`
  rows: 3;
  width: 100%;
  height: 64px;
  border: none;
  border-radius: 20px;
  padding: 12px 24px 12px 24px;
  
`
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
export default RecibirTab;
