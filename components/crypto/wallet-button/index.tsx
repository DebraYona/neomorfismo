import { FC } from 'react';
import styled from 'styled-components';
import { Avatar, Card } from 'antd';
import { CardProps } from 'antd/lib/card';

const { Meta } = Card;

const WalletButton: FC = () => {
  return (
    <StyledCard>
      <StyledAvatar  src="./wallet.svg" />
      <div>Agregar monederos</div>
    </StyledCard>
  );
};

const StyledCard = styled(Card)<CardProps>`
  cursor: pointer;
  width: 100%;
  flex: 1 1;
  width: 180px;
  min-width: 180px;
  max-width: 180px;
  max-height: 80px;
  border-radius: 15px;
  color: #444444;
  box-shadow: 5px 10px 5px #eeeeee;
  .ant-card-body {
    padding: 8px 4px 8px 8px;
    display: flex;
    > div {
      margin-top: 10px;
      margin-left: 4px;
      flex: 1 1;
    }
    .ant-avatar {
      padding-right: 4px;
      margin-top: -4px;
    }
    .ant-card-meta-detail {
      padding-top: 8px;
    }
  }
  @media (max-width: 500px) {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
  }
`;

const StyledAvatar = styled.img`
  height: 70px;
  width: 56px;
`;

export default WalletButton;
