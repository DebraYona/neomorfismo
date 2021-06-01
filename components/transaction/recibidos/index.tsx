import { FC } from 'react';
import styled from 'styled-components';
import { Avatar, Button, Card, Col, Input, Typography, Row } from 'antd';
import { CardProps } from 'antd/lib/card';
import { SearchOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { Text } = Typography;

const Recibidos: FC = () => {
  return (
    <ContainerRecibidos>
      <div style={{ margin: 'auto' }}>
        <div style={{ textAlign: 'center' }}>
          <StyledText>¿En qué te podemos ayudar?</StyledText>
        </div>
        <div>
          <StyledSearch
            placeholder="Escribe aquí lo que estas buscando..."
            suffix={<SearchOutlined color="#1da7ff" />}
          />
        </div>
      </div>
    </ContainerRecibidos>
  );
};

const StyledKey = styled.img`
  width: 70px;
  padding: 70px;
`;
const ContainerRecibidos = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
const StyledSearch = styled(Input)`
  & .ant-input {
    border: 1px solid #ddd;
  }
  width: 300px;
`;
const StyledText = styled(Text)`
  & .ant-typography {
    font-size: 18px;
    width: 200px;
    border: 1px solid #ddd;
    padding-bottom: 4px;
    margin: auto;
  }
`;

export default Recibidos;
