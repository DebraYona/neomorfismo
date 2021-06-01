import { FC } from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';

const TwinpayTab: FC = () => {
  return (
    <Row style={{ paddingTop: '50px' }}>
      <Col span={6}>
        <TitleAction>WALLET PERSONAL</TitleAction>
      </Col>
      <Col span={18} style={{ paddingTop: '50px' }}>
        <TextInfo>
          SELECCIONA UNA DE ESTAS WALLET PARA REALIZAR PAGO CON EL BOTÓN DE
          TWINPAY
        </TextInfo>
        <Containerwallet>
          <Monedero type = 'Personal' title = 'Titulo' />
          <Monedero type = 'Personal' title = 'Titulo' />
          <Monedero type = 'Personal' title = 'Titulo' />
          <Monedero type = 'Personal' title = 'Titulo' />
          <Monedero type = 'Personal' title = 'Titulo' />
        </Containerwallet>
      </Col>
    </Row>
  );
};

interface MonederoProps {
  type: string;
  title: string;
}

const Monedero: FC<MonederoProps> = ({
  type = 'Personal',
  title = 'Titulo',
}) => {
  return (
    <>
      <Row>
        <Type>Monedero {type}</Type>
      </Row>
      <Row>
        <BodyWrapper>
          <Body>
            <Title>Monedero {title}</Title>
            <Monto>Monto</Monto>
            <Icono>
              <ContainerPay>
                <ContainerImage><ImageIcono src="twin.svg"></ImageIcono>Twinpay</ContainerImage>
               
              </ContainerPay>
            </Icono>
            
            <Checkbox>
              <ImageCheck src="checki.svg" />
            </Checkbox>
          </Body>
          <Info>
            <ImageInfo src="./info.svg" />
          </Info>
          <Delete>
            <ImageDelete src="./trash.svg" />
          </Delete>
        </BodyWrapper>
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
    padding-top: 0px;
    padding-bottom: 0px;
  }
`;

const Title = styled.div`
  flex: 1 1 auto;
  color: #99A0AF;
  display: flex;
  align-items: center;
`;
const TextInfo = styled.div`
  flex: 1 1 auto;
  color: #9e9e9e;
  font-size: 20px;
  font-weight: 600;
`;
const TitleAction = styled.div`
  flex: 1 1 auto;
  color: #9e9e9e;
  font-size: 25px;
`;

const Monto = styled.div`
  flex: 0 0 180px;
  color: #99A0AF;
  display: flex;
  align-items: center;
`;
const Icono = styled.div`
  flex: 0 0 180px;

`;
const ContainerPay = styled.div`
  width:120px;
  padding:2px;
  border-radius: 15px;
  box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;

`;
const Containerwallet = styled.div`
 margin: auto;
 padding-top:20px;
 padding-right: 100px;

`;

const Checkbox = styled.button`
  flex: 0 0 20px;
  display: flex;
  flex-flow: row wrap;
  border-radius: 8px;
  padding-left: 10px;
  padding-right: 10px;
  box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;
`;

const Type = styled.div`
  margin: 12px 20px 4px 20px;
  color: #3395FF;
  font-size: 18px;
`;

const Body = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-flow: row wrap;
  border-radius: 15px;
  padding-left: 16px;
  padding-right: 16px;
  align-content: center;
  box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;
`;

const Info = styled.div`
  flex: 0 0 auto;
  align-self: flex-end;
  height: 40px;
  width: 40px;
  border-radius: 8px;
  margin-bottom: 8px;  
  box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;
  && {
    padding-top: 4px;
  }
`;
const Delete = styled.div`
  flex: 0 0 auto;
  align-self: flex-end;
  height: 40px;
  width: 40px;
  border-radius: 8px;
  margin-bottom: 8px;
  box-shadow: 7px 7px 14px #cccccc, -7px -7px 14px #ffffff;
  && {
    padding-top: 4px;
  }
`;
const ContainerImage = styled.div`
  margin:auto;
  width: max-content;
  
`;
const ImageInfo = styled.img`
  width: 15px;
  display: block;
  margin: auto;
`;
const ImageDelete = styled.img`
  width: 25px;
  display: block;
  margin: auto;
`;
const ImageCheck = styled.img`
  width: 16px;
`;
const ImageIcono = styled.img`
  width: 28px;
  margin:2px;
`;
export default TwinpayTab;
