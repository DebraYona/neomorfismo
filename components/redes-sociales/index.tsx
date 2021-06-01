import { FC } from 'react';
import styled from 'styled-components';
import { Avatar, Card, Button } from 'antd';
import { CardProps } from 'antd/lib/card';
import {
  WhatsAppOutlined,
  InstagramOutlined,
  GoogleOutlined,
  TwitterOutlined,
  FacebookOutlined,
  ShareAltOutlined,
  EyeInvisibleOutlined,
} from '@ant-design/icons';

const { Meta } = Card;
export interface CurrencyCardProps {
  logo?: string;
  title?: string;
  descripcion?: string;
}
const ButtonRedesSociales: FC = () => {
  return (
    <ContainerBtnRedes>
      <ButtonRedes
        size="large"
        icon={<FacebookOutlined style={{ fontSize: '16px' }} />}
      />
      <ButtonRedes size="large" icon={<InstagramOutlined />} />
      <ButtonRedes size="large" icon={<TwitterOutlined />} />
      <ButtonRedes size="large" icon={<WhatsAppOutlined />} />
      <ButtonRedes size="large" icon={<ShareAltOutlined />} />
    </ContainerBtnRedes>
  );
};

const ContainerBtnRedes = styled.div`
  width: max-content;
  margin: auto;
`;

const ButtonRedes = styled(Button)`
  margin: 2px;
  border-radius: 30px;
  background-color: #ffffff;
  border-color: #ffffff;
  box-shadow: 10px 10px 20px #c7c7c7, -10px -10px 20px #ffffff;
  &.ant-btn {
    border-radius: 12px;
  }
`;
export default ButtonRedesSociales;
