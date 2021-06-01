import { FC } from 'react';
import styled from 'styled-components';
import { Avatar, Button, Card, Row, Input, Typography, Col } from 'antd';
import { CardProps } from 'antd/lib/card';
import { SearchOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { Text } = Typography;

const Iconos: FC = () => {
  return (
    <ContainerIcon>
      <StyledCard>
        <StyledPregunta style={{ paddingLeft: '20px' }}>
          <div>
            <Row style={{ marginBottom: '20px' }}>
              <StyledKey src="./pregunta3.svg" />
            </Row>
            <Row>
              <Text>Preguntas frecuentes</Text>
            </Row>
          </div>
          <div>
            <Row style={{ marginBottom: '12px' }}>
              <StyledFoco src="./foco2.svg" />
            </Row>
            <Row>
              <Text>Problemas comunes</Text>
            </Row>
          </div>
        </StyledPregunta>
        <StyledSeparator />
        <Row style={{ padding: '0' }}>
          <Col
            style={{
              margin: 'auto',
              paddingBottom: '10px',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <StyledCoy>¿No encontraste lo que buscabas?</StyledCoy>
            </div>

            <Row style={{ marginTop: '15px' }}>
              <StyledNube src="./nube.svg" />
            </Row>
            <Row style={{ padding: '0' }}>
              <ButtonOptions>CHAT</ButtonOptions>
              <ButtonOptions>CONTACTO</ButtonOptions>
            </Row>
          </Col>
        </Row>
      </StyledCard>
    </ContainerIcon>
  );
};

const StyledPregunta = styled.div`
  justify-content: space-around;
  display: flex;
`;
const StyledSeparator = styled.div`
  height: 100px;
`;

const ContainerIcon = styled.div`
  width: 100%;
`;
const StyledCard = styled(Card)`
  border-color: #ffffff;
  width: 60%;
  margin: auto;
  font-size: 18px;
  height: 40%;
  & .ant-typography {
    color: #444444;
  }
`;
const StyledKey = styled.img`
  width: 80px;
  height: 80px;
  margin: auto;
`;
const StyledFoco = styled.img`
  width: 90px;
  height: 90px;
  margin: auto;
`;
const StyledNube = styled.img`
  width: 90px;
  height: 90px;
  margin: auto;
`;
const StyledCoy = styled(Text)`
  & .ant-typography {
    padding: 0;
    border: 1px solid #ddd;
    margin: auto;
  }
`;
const ButtonOptions = styled(Button)`
  background-color: #ffffff;
  color: #444444;
  border-radius: 25px;
  width: 140px;
  height: 40px;
  box-shadow: 5px 10px 5px #eeeeee;
  margin-top: 35px;
  margin-left: 8px;
  margin-right: 8px;
  border-color: #ffffff;
`;
export default Iconos;
