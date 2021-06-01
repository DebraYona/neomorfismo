import { FC } from 'react';
import styled from 'styled-components';
import { Avatar, Button, Card, Form, Input, Typography, Col } from 'antd';
import { CardProps } from 'antd/lib/card';
import { KeyOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { Text } = Typography;
export interface TabButtonProps {
  title?: string;
}
const TabButton: FC<TabButtonProps> = ({ title = 'Transaccion' }) => {
  return (
    <>
      <StyledCard>
        <StyledTab>{title}</StyledTab>
        <StyledButton>VER</StyledButton>
      </StyledCard>
    </>
  );
};

const StyledCard = styled(Card)`
  flex: 0 0;
  box-shadow: 5px 3px #eeeeee;
  max-height: 70px;
  border-radius: 15px;
  padding-left: 15px;
  padding-right: 15px;
  margin-right: 50px;
  margin-left: 50px;
  color: #444444;
  .ant-card-body {
    width: max-content;

    padding-right: 0;
  }
`;

const StyledButton = styled(Button)`
  & .ant-btn {
    margin: 10px;
  }
  margin-left: 40px;
  margin-right: 20px;
  width: 100px;
  background-color: #1da7ff;
  color: #ffffff;
  border-radius: 10px;
`;
const StyledTab = styled(Text)`
  & .ant-typography {
    border: 1px solid #ddd;
    margin-left: 20px;
  }
`;

export default TabButton;
