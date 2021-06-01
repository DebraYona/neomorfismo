import { FC } from 'react';
import styled from 'styled-components';
import { Avatar, Button, Card, Form, Input, Typography, Col } from 'antd';
import { CardProps } from 'antd/lib/card';
import { KeyOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { Text } = Typography;

const Clave: FC = () => {
  return (
    <StyledCard>
      <StyledKey src="https://icons-for-free.com/iconfiles/png/512/key-131964743726034019.png" />
      <StyledCoy>CLAVE DE LLAVE PERSONAL</StyledCoy>

      <div>
        <Text>Revice su clave privada aquí</Text>
      </div>

      <StyledKey src="https://icons-for-free.com/iconfiles/png/512/key-131964743726034019.png" />
      <StyledCoy copyable>Revice su clave privada aquí</StyledCoy>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  box-shadow: 10px 10px 20px #c7c7c7, -10px -10px 20px #ffffff;
  border: 0;
  width: 50%;
  flex: 1 1;
  min-width: 50%;
  max-height: 100px;
  border-radius: 15px;
  margin-left: 40px;
  color: #444444;
  .ant-card-body {
    padding: 10px 10px 14px 10px;
  }
`;
const StyledKey = styled.img`
  width: 25px;
  padding: 5px;
`;
const StyledAvatar = styled(Avatar)`
  height: 70px;
  width: 56px;
`;
const StyledCoy = styled(Text)`
  & .ant-typography-copy {
    border-color: #eeeeee;
  }
  & .ant-typography {
    border: 1px solid #ddd;
  }
`;

export default Clave;
