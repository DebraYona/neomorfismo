import { FC, ReactElement } from 'react';
import styled from 'styled-components';
import { Avatar, Card } from 'antd';

export interface CurrencyActionCardFormProps {
  logo?: string;
  icon?: ReactElement;
  name?: string;
  selected?: boolean;
}
const CurrencyActionButton: FC<CurrencyActionCardFormProps> = ({
  logo = 'TITULO',
  name = 'green',
  selected = false,
}) => {
  return (
    <StyledCard selected={selected}>
      <StyledAvatar src={logo} />
      {name}
    </StyledCard>
  );
};
//51, 149,255,40 rgb
const StyledCard = styled(Card)<{ selected: boolean }>`
  background-color: ${({ selected }) => (selected ? '#' : 'white')};
  background-image: ${({ selected }) => (selected ? 'linear-gradient(127deg, #E6E7ED 0%, #F7F8FA 100%);' : '#EBECF0')};

  color: ${({ selected }) => (selected ? '#5E6166' : '#444444')};
  cursor: pointer;
  min-width: 130px;
  width: 150px;
  max-width: 150px;
  min-width: 140px;
  flex: 1 1;
  max-height: 50px;
  border-radius: 20px;
  box-shadow: ${({ selected }) => (selected ?  '1px 1px 7px 0 #EBECF0, inset -5px -4px 10px 0 #FAFBFC, inset 3px 3px 8px 0 #BDC1D1': '-7px -7px 16px 0 #FAFBFC, 4px 3px 19px 0 #BDC1D1, inset -1px -1px 16px 0 #F5F6FA, inset 1px 1px 16px 0 #E9EAF2' )};
  .ant-card-body {
    padding: 8px 10px 16px 16px;
    .ant-avatar {
      margin-right: 6px;
    }
    .ant-card-meta-detail {
      padding-top: 8px;
    }
  }
`;

const StyledAvatar = styled.img`
  height: 36px;
  width: 36px;
  margin-right: 6px;
    
`;

export default CurrencyActionButton;
