import { Avatar, Card } from 'antd';
import styled from 'styled-components';
import { FC } from 'react';
import { CardProps } from 'antd/lib/card';

const { Meta } = Card;

const MapAddressCard: FC = () => {
  return (
    <StyledCard>
      <Meta
        avatar={<StyledAvatar shape="square" src="logo.png" />}
        title="Artesanias SA de CV"
        description="Sierra de Autlán 2001"
      />
      <div>
        9213123123 <StyledKey src="./mexico.png" />
      </div>
    </StyledCard>
  );
};
const StyledKey = styled.img`
  width: 25px;
  height: 25px;
  margin: auto;
  margin-left: 10px;
`;
const StyledCard = styled(Card)<CardProps>`
  width: 280px;
  flex: 1 1;
  min-width: 280px;
  height: 1o0px;
  border-radius: 15px;
  .ant-card-body {
    padding: 18px 10px 14px 10px;
  }
`;

const StyledAvatar = styled(Avatar)`
  height: 56px;
  width: 56px;
`;

export default MapAddressCard;
