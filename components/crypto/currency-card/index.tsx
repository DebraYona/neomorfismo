import { FC } from 'react';
import styled from 'styled-components';
import { Avatar, Card } from 'antd';
import { CardProps } from 'antd/lib/card';

const { Meta } = Card;
export interface CurrencyCardProps {
  logo?: string;
  title?: string;
  descripcion?: string;
  selected?: boolean;
}
const CurrencyCard: FC<CurrencyCardProps> = ({
  logo = 'TITULO',
  title = 'green',
  descripcion = 'green',
  selected = false,
}) => {
  return (
    <StyledCard selected={selected}>
      <Meta
        avatar={<StyledAvatar  src={logo} />}
        title={title}
        description={descripcion}
      />
    </StyledCard>
  );
};

const StyledCard = styled(Card)<{ selected: boolean }>`
  background-color: ${({ selected }) => (selected ? '#ff5733' : 'white')};
  background-image: ${({ selected }) => (selected ? 'linear-gradient(127deg, #E6E7ED 0%, #F7F8FA 100%);' : '#EBECF0')};
  width: 100%;
  flex: 1 1;
  width: 220px;
  min-width: 220px;
  max-width: 300px;
  max-height: 80px;
  border-radius: 15px;
  box-shadow: ${({ selected }) => (selected ?  '1px 1px 7px 0 #EBECF0, inset -5px -4px 10px 0 #FAFBFC, inset 3px 3px 8px 0 #BDC1D1': '-7px -7px 16px 0 #FAFBFC, 4px 3px 19px 0 #BDC1D1, inset -1px -1px 16px 0 #F5F6FA, inset 1px 1px 16px 0 #E9EAF2' )};
  .ant-card-body {
    padding: 18px 10px 14px 10px;
  }
  .ant-card-meta-avatar {
    margin-top: -2px;
    margin-right: 15px;
  }
  .ant-card-meta-title {
    color: ${({ selected }) => (selected ? '#5E6166' : '#444444')};
  }
  .ant-card-meta-description {
    color: ${({ selected }) => (selected ? '#5E6166' : '#444444')};
  }
  @media (max-width: 500px) {
    width: 100%;
    min-width: 100%;
    max-width: 100%;
  }
`;

const StyledAvatar = styled.img`
  height: 56px;
  width: 56px;
`;

export default CurrencyCard;
